import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
/* import { IUserHttp } from '../models/http-models/user-http.interface'; */

@Injectable()
export class WeatherService {

    forecastUrl = 'http://api.apixu.com/v1/forecast.json?key=2bba696919e241d396271244192303&q=';
    forecastEndpoint = '&days=7';

    constructor(private _http: HttpClient) { }

    getWeatherByCity(cityName) {
        return this._http.get<any>(this.forecastUrl + cityName + this.forecastEndpoint);
    }
}
