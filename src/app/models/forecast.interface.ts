import { IForecastDay } from './forecastDay.interface';

export interface IForecast {
    forecast: IForecastDayList
}

export interface IForecastDayList {
    forecastday: IForecastDay[]
}