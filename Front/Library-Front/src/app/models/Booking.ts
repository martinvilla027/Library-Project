//Author: Martín Fernando Villa Naranjo

export class Booking {
    constructor(
        public Date_Of_Booking: string = "",
        public Date_Of_Return: string = "",
        public Book_Id: number = 0,
        public Booking_Status_Id: number = 0,
        public User_Document: string = ""
    ) { }
}