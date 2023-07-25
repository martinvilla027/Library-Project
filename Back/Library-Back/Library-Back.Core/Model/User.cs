//Author: Martín Fernando Villa Naranjo

using System;

namespace Library_Back.Core.Model
{
    /// <summary>
    /// Login Entity
    /// </summary>
    public class User
    {
        public int User_Id { get; set; }

        public string User_Document { get; set; }

        public string User_Password { get; set; }

        public string User_Name { get; set; }

        public string User_Last_Name { get; set; }

        public string Phone_Number { get; set; }

        public string Cell_Phone_Number { get; set; }

        public string Address { get; set; }

        public string Country_Of_Birth { get; set; }

        public DateTime Date_Of_Birth { get; set; }

        public int User_Type_Id { get; set; }

        public int User_Status_Id { get; set; }
    }
}
