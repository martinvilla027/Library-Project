//Author: Martín Fernando Villa Naranjo

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Library_Back.Core.Model
{
    /// <summary>
    /// Login Entity
    /// </summary>
    public class Login
    {
        public string User { get; set; }
        public string Password { get; set; }
        public int Role { get; set; }
    }
}
