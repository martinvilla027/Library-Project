//Author: Martín Fernando Villa Naranjo

using System;

namespace Library_Back.Core.Model
{
    /// <summary>
    /// Booking Entity
    /// </summary>
    public class Booking
    {
        public DateTime Date_Of_Booking { get; set; }

        public DateTime Date_Of_Return { get; set; }

        public int Book_Id { get; set; }

        public string User_Document { get; set; }
    }
}
