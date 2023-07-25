//Author: Martín Fernando Villa Naranjo

import { Component } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { BookingService } from '../../services/booking.service';
import { Booking } from '../../models/Booking';
import { Router } from '@angular/router';

@Component({
  selector: 'booking-root',
  templateUrl: './bookingForm.component.html',
  styleUrls: ['./bookingForm.component.scss']
})
export class BookingComponent {

  popUpTittleMessage = "Confirm booking creation";
  popUpMessage = "";
  private bookingModel: Booking = new Booking();
  private bookingResponse: string;
  private InputDocument: string;
  private DateOfBooking: string;
  private DateOfReturn: string;
  private CbBooks: string;
  private booksList: any[];
  private showConfirmPopUp: boolean = false;

  constructor(
    private router: Router,
    private booksService: BooksService,
    private bookingService: BookingService
  ) { }

  ngOnInit() {
    this.booksService.getBooks().subscribe(books => {
      if (books.IsError) {
        console.log(books.IsError);
      } else {
        this.booksList = [];
        this.booksList = books;
      }
    }
    )
  }

  showPopup() {
    this.showConfirmPopUp = true;
  }

  hidePopup() {
    this.showConfirmPopUp = false;
  }

  return() {
    this.router.navigate(['menu/']);
  }

  insertBooking() {
    //validate book id combo
    this.bookingModel.Date_Of_Booking = this.DateOfBooking;
    this.bookingModel.Date_Of_Return = this.DateOfReturn;
    this.bookingModel.Book_Id = parseInt(this.CbBooks);
    this.bookingModel.Booking_Status_Id = 6;
    this.bookingModel.User_Document = this.InputDocument;
    this.showPopup();
    this.bookingService.insertBooking(this.bookingModel).subscribe(booking => {
      if (booking.IsError) {
        //error message
      } else {
        this.bookingResponse = booking;
        this.popUpMessage = this.bookingResponse;
      }
    })
  }
}