//Author: Martín Fernando Villa Naranjo

import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { GetUrlServer } from '../models/geturlServer';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class BooksService {
    constructor(
        private http: Http
    ) { }

    private urls: GetUrlServer = new GetUrlServer();

    createAuthorizationHeader(): Headers {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return headers;
    }

    getBooks() {
        let url = this.urls.urlWebApi + 'Book/GetBooks';
        return this.http.get(url).pipe(
            map((res: Response) => res.json()),
            catchError((err: any) => {
                return err;
            }));
    }
}