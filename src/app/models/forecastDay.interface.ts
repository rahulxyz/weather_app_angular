import { IDay } from './day.interface';
import { IAstro } from './astro.interface';

export interface IForecastDay {
    date: string,
    date_epoch: number,
    day: IDay,
    astro: IAstro
}