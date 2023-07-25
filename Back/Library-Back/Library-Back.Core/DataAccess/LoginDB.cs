//Author: Martín Fernando Villa Naranjo

using Dapper;
using Library_Back.Core.Model;
using System;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;


namespace Library_Back.Core
{
    public class LoginDB
    {
        /// <summary>
        /// Connects to database and returns a login validation
        /// </summary>
        /// <param name="login"> login object </param>
        /// <returns> true or false </returns>
        public int ValidateLogin(Login login)
        {
            int validateResponse = 0;
            using (var conn = new SqlConnection(ConfigurationManager.ConnectionStrings["dbLibrary"].ConnectionString))
            {
                try
                {
                    DynamicParameters param = new DynamicParameters();
                    param.Add("@User", login.User);
                    param.Add("@Password", login.Password);
                    param.Add("@Role", login.Role);

                    validateResponse = conn.QueryFirstOrDefault<int>("ValidateLogin", param, commandType: CommandType.StoredProcedure);
                }
                catch (Exception)
                {
                    throw;
                }
            }

            return validateResponse;
        }
    }
}
