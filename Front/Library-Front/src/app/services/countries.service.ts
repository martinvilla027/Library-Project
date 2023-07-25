//Author: Martín Fernando Villa Naranjo

import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { GetUrlServer } from '../models/geturlServer';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class CountriesService {
    constructor(
        private http: Http
    ) { }

    private urls: GetUrlServer = new GetUrlServer();

    createAuthorizationHeader(): Headers {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return headers;
    }

    getCountries() {
        let url = this.urls.urlAllCountries;
        return this.http.get(url).pipe(
            map((res: Response) => res.json()),
            catchError((err: any) => {
                return err;
            }));
    }

    getCode(data: string) {
        let url = this.urls.urlCountryCode + data;
        return this.http.get(url).pipe(
            map((res: Response) => res.json()),
            catchError((err: any) => {
                return err;
            }));
    }
}