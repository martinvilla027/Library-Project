//Author: Martín Fernando Villa Naranjo

export class GetUrlServer{
    constructor(
        public urlWebApi: string = 'http://localhost:44315/api/',
        public urlAllCountries: string = 'https://restcountries.eu/rest/v2/all',
        public urlCountryCode: string ='https://restcountries.eu/rest/v2/name/'
        //public urlAllCountries: string = 'http://services.groupkt.com/country/get/all',
        //public urlCountryCode: string = 'http://services.groupkt.com/country/search'
    ) { } 
}