import { IError } from './error.interface';
import { ICurrent } from './current.interface';
import { ILocation } from './location.interface';
import { IForecastDayList } from './forecast.interface';
import { IForecast } from './forecast.interface';

export interface IWeather {
    current: ICurrent,
    location: ILocation,
    forecast: IForecast,
    error: IError
}