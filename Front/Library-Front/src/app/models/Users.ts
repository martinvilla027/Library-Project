//Author: Martín Fernando Villa Naranjo

export class Users{
    constructor(
        public User_Document: string = "",
        public User_Password: string = "",
        public User_Name: string = "",
        public User_Last_Name: string = "",
        public Phone_Number: number = 0,
        public Cell_Phone_NUmber: number = 0,
        public Address: string = "",
        public Country_Of_Birth: string = "",
        public Date_Of_Birth: string = "",
        public User_Type_Id: number = 0,
        public User_Status_Id: number = 0
    ){}
}