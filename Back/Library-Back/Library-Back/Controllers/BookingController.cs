//Author: Martín Fernando Villa Naranjo

using Library_Back.Core.DataAccess;
using Library_Back.Core.Model;
using System.Web.Http;

namespace Library_Back.Controllers
{
    public class BookingController : ApiController
    {
        /// <summary>
        /// Http POST Method to insert booking data
        /// </summary>
        /// <param name="booking"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("api/Booking/CreateBooking")]
        public string CreateBooking([FromBody] Booking booking)
        {
            string bookingResponse;
            BookingDB bookingDB = new BookingDB();
            bookingResponse = bookingDB.InsertBooking(booking);
            return bookingResponse;
        }
    }
}
