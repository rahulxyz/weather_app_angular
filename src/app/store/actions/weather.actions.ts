import { Action } from '@ngrx/store';
import { IWeather } from '../../models/weather.interface';
import { IError } from 'src/app/models/error.interface';

export enum EWeatherActions {
    WEATHER_BY_CITY_LOAD = '[WEATHER] WEATHER BY CITY LOAD',
    WEATHER_BY_CITY_SUCCESS = '[WEATHER] WEATHER BY CITY SUCCESS',
    WEATHER_BY_CITY_FAIL = '[WEATHER] WEATHER BY CITY FAIL'
}

export class WeatherByCityLoad implements Action {
    public readonly type = EWeatherActions.WEATHER_BY_CITY_LOAD
    constructor(public payload: String) { }
}

export class WeatherByCitySuccess implements Action {
    public readonly type = EWeatherActions.WEATHER_BY_CITY_SUCCESS
    constructor(public payload: IWeather) { }
}

export class WeatherByCityFail implements Action {
    public readonly type = EWeatherActions.WEATHER_BY_CITY_FAIL
    constructor(public payload: IError) { }
}

export type WeatherActions = WeatherByCityLoad | WeatherByCitySuccess | WeatherByCityFail;