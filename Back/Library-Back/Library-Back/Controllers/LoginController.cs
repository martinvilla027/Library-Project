//Author: Martín Fernando Villa Naranjo

using Library_Back.Core;
using Library_Back.Core.Model;
using System.Web.Http;

namespace Library_Back.Controllers
{
    public class LoginController : ApiController
    {
        /// <summary>
        /// Http POST Method to validate login
        /// </summary>
        /// <param name="login"> login object </param>
        /// <returns>true or false </returns>
        [HttpPost]
        [Route("api/Login/ValidatesLogin")]
        public IHttpActionResult ValidateLogin([FromBody] Login login)
        {
            int validateResponse = 0;
            LoginDB loginDB = new LoginDB();
            validateResponse = loginDB.ValidateLogin(login);
            return Ok(validateResponse);
        }
    }
}
