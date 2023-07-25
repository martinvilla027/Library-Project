//Author: Martín Fernando Villa Naranjo

using Dapper;
using Library_Back.Core.Model;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;

namespace Library_Back.Core.DataAccess
{
    public class BooksDB
    {
        /// <summary>
        /// Connects to database and returns list available books
        /// </summary>
        /// <returns> book list </returns>
        public List<Books> GetBooks()
        {
            List<Books> booksResponse = new List<Books>();
            using (var conn = new SqlConnection(ConfigurationManager.ConnectionStrings["dbLibrary"].ConnectionString))
            {
                try
                {
                    DynamicParameters param = new DynamicParameters();
                    booksResponse = conn.Query<Books>("GetBooks", param, commandType: CommandType.StoredProcedure).ToList();
                }
                catch (Exception)
                {
                    throw;
                }
            }

            return booksResponse;
        }
    }
}
