//Author: Martín Fernando Villa Naranjo

using Dapper;
using Library_Back.Core.Model;
using System;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;

namespace Library_Back.Core.DataAccess
{
    public class UserDB
    {
        /// <summary>
        /// Connects to database and insert user information
        /// </summary>
        /// <param name="user"> user object </param>
        /// <returns> document or user existed message </returns>
        public string InsertUser(User user)
        {
            string affectedRows = "";
            using (var conn = new SqlConnection(ConfigurationManager.ConnectionStrings["dbLibrary"].ConnectionString))
            {
                try
                {
                    DynamicParameters param = new DynamicParameters();
                    param.Add("@Document", user.User_Document);
                    param.Add("@Password", user.User_Password);
                    param.Add("@Name", user.User_Name);
                    param.Add("@LastName", user.User_Last_Name);
                    param.Add("@Phone", user.Phone_Number);
                    param.Add("@Cellphone", user.Cell_Phone_Number);
                    param.Add("@Address", user.Address);
                    param.Add("@Country", user.Country_Of_Birth);
                    param.Add("@Birth", user.Date_Of_Birth);
                    param.Add("@Type", user.User_Type_Id);
                    param.Add("@Status", user.User_Status_Id);

                    affectedRows = conn.QueryFirstOrDefault<string>("InsertUser", param, commandType: CommandType.StoredProcedure).ToString();
                }
                catch (Exception)
                {
                    throw;
                }
            }
            return affectedRows;
        }
    }
}
