//Author: Martín Fernando Villa Naranjo

using Dapper;
using Library_Back.Core.Model;
using System;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;

namespace Library_Back.Core.DataAccess
{
    public class BookingDB
    {
        /// <summary>
        /// Connects to database and insert booking information
        /// </summary>
        /// <param name="booking"> booking object </param>
        /// <returns> string message </returns>
        public string InsertBooking(Booking booking)
        {
            string bookingResponse = "";
            using (var conn = new SqlConnection(ConfigurationManager.ConnectionStrings["dbLibrary"].ConnectionString))
            {
                try
                {
                    DynamicParameters param = new DynamicParameters();
                    param.Add("@BookingDate", booking.Date_Of_Booking);
                    param.Add("@BookingReturn", booking.Date_Of_Return);
                    param.Add("@BookId", booking.Book_Id);
                    param.Add("@BookingStatus", 6);
                    param.Add("@Document", booking.User_Document);
                    
                    bookingResponse = conn.QueryFirstOrDefault<string>("InsertBooking", param, commandType: CommandType.StoredProcedure).ToString();
                }
                catch (Exception)
                {

                    throw;
                }
            }
                return bookingResponse;
        }
    }
}
