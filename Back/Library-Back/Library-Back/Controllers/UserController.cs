//Author: Martín Fernando Villa Naranjo

using Library_Back.Core.DataAccess;
using Library_Back.Core.Model;
using System.Web.Http;

namespace Library_Back.Controllers
{
    public class UserController : ApiController
    {
        /// <summary>
        /// Http POST Method to insert user data
        /// </summary>
        /// <param name="user"> user object </param>
        /// <returns> document or user existed message </returns>
        [HttpPost]
        [Route("api/User/InsertUser")]
        public string InsertUser([FromBody] User user)
        {
            string userResponse;
            UserDB userDB = new UserDB();
            userResponse = userDB.InsertUser(user);
            return userResponse;
        }
    }
}
