//Author: Martín Fernando Villa Naranjo

import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { GetUrlServer } from '../models/geturlServer';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class LoginService {
    constructor(
        private http: Http
    ) { }

    private urls: GetUrlServer = new GetUrlServer();

    createAuthorizationHeader(): Headers {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return headers;
    }

    validateLogin(data: any) {
        let headers = this.createAuthorizationHeader();
        let url = this.urls.urlWebApi + 'Login/ValidatesLogin';
        return this.http.post(url, data, { headers: headers }).pipe(
            map((res: Response) => res.json()),
            catchError((err: any) => {
                return err;
            }));
    }
}