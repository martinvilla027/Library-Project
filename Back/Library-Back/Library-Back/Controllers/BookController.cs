//Author: Martín Fernando Villa Naranjo

using Library_Back.Core.DataAccess;
using Library_Back.Core.Model;
using System.Collections.Generic;
using System.Web.Http;

namespace Library_Back.Controllers
{
    public class BookController : ApiController
    {
        /// <summary>
        /// Http GET Method to get books for booking form
        /// </summary>
        /// <returns> book list </returns>
        [HttpGet]
        [Route("api/Book/GetBooks")]
        public IHttpActionResult GetBooks()
        {
            BooksDB booksDB = new BooksDB();
            List<Books> booksResponse = new List<Books>();
            booksResponse = booksDB.GetBooks();
            return Ok(booksResponse);
        }
    }
}
