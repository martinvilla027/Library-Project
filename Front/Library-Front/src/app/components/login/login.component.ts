//Author: Martín Fernando Villa Naranjo

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { Login } from '../../models/Login';

@Component({
    selector: 'login-root',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    title = "Politécnico Grancolombiano's Library";
    private user: string;
    private password: string;
    private loginModel: Login = new Login();
    private responseLogin: number;
    private showDatepickerBegin: boolean = false;

    constructor(
        private router: Router,
        private loginService: LoginService,
    ) {}

    loginUser() {
        this.loginModel.User = this.user;
        this.loginModel.Password = this.password;
        this.loginModel.Role = 1;
        this.loginService.validateLogin(this.loginModel).subscribe(
            login => {
                if (login.IsError) {
                    //error message
                } else {
                    this.responseLogin = login;
                    if (this.responseLogin == 1) {
                        this.router.navigate(['menu']);
                    } else {
                        //message
                    }
                }
            }
        )
    }
}