import { createSelector } from '@ngrx/store';

import { IAppState, } from '../states/app.state';
import { IWeatherState } from '../states/weather.state';

const getWeather = (state: IAppState) => state.weather;

export const getWeatherList = createSelector(
  getWeather,
  (state: IWeatherState) => state
);

export const getForecastList = createSelector(
  getWeather,
  (state: any) => state.forecast.forecastday
)

export const getError = createSelector(
  getWeather,
  (state: any) => state.error
)

export const getLoaderStatus = createSelector(
  getWeather,
  (state) => state.loader
)
