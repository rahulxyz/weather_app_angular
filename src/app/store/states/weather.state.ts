import { IForecast } from 'src/app/models/forecast.interface';
import { IForecastDay } from 'src/app/models/forecastDay.interface';
import { IError } from 'src/app/models/error.interface';
import { ILocation } from 'src/app/models/location.interface';
import { ICurrent } from 'src/app/models/current.interface';
import { ICondition } from 'src/app/models/condition.interface';
import { IAstro } from 'src/app/models/astro.interface';
import { IDay } from 'src/app/models/day.interface';
import { ILoader } from 'src/app/models/loader.interface';

export interface IWeatherState {
    location: ILocation,
    current: ICurrent,
    forecast: IForecast,
    error: IError,
    loader: ILoader
}

const initial_location: ILocation = {
    name: '',
    region: '',
    country: '',
    lat: 0,
    lon: 0,
    tz_id: '',
    localtime_epoch: 0,
    localtime: ''
}

const initial_condition: ICondition = {
    text: '',
    icon: '',
    code: 0
}

const initial_current: ICurrent = {
    last_updated_epoch: 0,
    last_updated: '',
    temp_c: 0,
    temp_f: 0,
    is_day: 0,
    condition: initial_condition,
    wind_mph: 0,
    wind_kph: 0,
    wind_degree: 0,
    wind_dir: '',
    pressure_mb: 0,
    pressure_in: 0,
    precip_mm: 0,
    precip_in: 0,
    humidity: 0,
    cloud: 0,
    feelslike_c: 0,
    feelslike_f: 0,
    vis_km: 0,
    vis_miles: 0,
    uv: 0,
    gust_mph: 0,
    gust_kph: 0
}

const initial_astro: IAstro = {
    sunrise: '',
    sunset: '',
    moonrise: '',
    moonset: ''
}

const initial_day: IDay = {
    maxtemp_c: 0,
    maxtemp_f: 0,
    mintemp_c: 0,
    mintemp_f: 0,
    avgtemp_c: 0,
    avgtemp_f: 0,
    maxwind_mph: 0,
    maxwind_kph: 0,
    totalprecip_mm: 0,
    totalprecip_in: 0,
    avgvis_km: 0,
    avgvis_miles: 0,
    avghumidity: 0,
    condition: initial_condition,
    uv: 0
}

const initial_forecast_day: IForecastDay = {
    date: '',
    date_epoch: 0,
    day: initial_day,
    astro: initial_astro
}

const initial_forecast: IForecast = {
    forecast: {
        forecastday: []
    }
}


const initial_error = {
    hasError: false,
    errorStatus: null
}

const initial_loader = {
    hasLoaded: false
}

export const initialWeatherState: IWeatherState = {
    location: initial_location,
    current: initial_current,
    forecast: initial_forecast,
    error: initial_error,
    loader: initial_loader
}
