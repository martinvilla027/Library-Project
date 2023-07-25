//Author: Martín Fernando Villa Naranjo

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../../models/Users';
import { UsersService } from '../../services/users.service';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'register-root',
  templateUrl: './registerForm.component.html',
  styleUrls: ['./registerForm.component.scss']
})
export class RegisterComponent {

  popUpTittleMessage = "Confirm user creation";
  popUpMessage = "";
  private usersModel: Users = new Users();
  private responseUsers: string;
  private InputDocument: string;
  private InputName: string;
  private InputLastName: string;
  private InputPhone: number;
  private InputCellphone: number;
  private InputAddress: string;
  private CbCountries: string;
  private DateOfBirth: string;
  private countryList: any[];
  private showConfirmPopUp: boolean = false;

  constructor(
    private router: Router,
    private usersService: UsersService,
    private countriesService: CountriesService
  ) { }

  ngOnInit() {
    this.countriesService.getCountries().subscribe(countries => {
      if (countries.IsError) {
        console.log(countries.IsError);
      } else {
        this.countryList = [];
        this.countryList = countries;
      }
    })
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

  insertUser() {
    this.usersModel.User_Document = this.InputDocument;
    this.usersModel.User_Name = this.InputName;
    this.usersModel.User_Last_Name = this.InputLastName;
    this.usersModel.Phone_Number = this.InputPhone;
    this.usersModel.Cell_Phone_NUmber = this.InputCellphone;
    this.usersModel.Address = this.InputAddress;
    this.usersModel.Date_Of_Birth = this.DateOfBirth;
    this.usersModel.User_Type_Id = 2; //Student
    this.usersModel.User_Status_Id = 1; //Active
    this.showPopup();
    this.countriesService.getCode(this.CbCountries).subscribe(code => {
      if (code.IsError) {
        this.popUpMessage = "Server error!";
      } else {
        this.usersModel.Country_Of_Birth = code[0].alpha2Code;
        this.usersService.insertUser(this.usersModel).subscribe(
          user => {
            if (user.IsError) {
              this.popUpMessage = "Server error!";
            } else {
              this.responseUsers = user;
              if (this.responseUsers !== "") {
                this.popUpMessage = this.responseUsers;
              } else {
                //message
              }
            }
          }
        )
      }
    })
  }
}