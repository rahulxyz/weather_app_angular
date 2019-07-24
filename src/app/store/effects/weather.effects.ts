import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

import { IAppState } from '../states/app.state';
import { EWeatherActions, WeatherByCityLoad, WeatherByCitySuccess, WeatherByCityFail } from '../actions/weather.actions';
import { WeatherService } from '../../services/weather.service';
import { IWeather } from '../../models/weather.interface';

@Injectable()
export class WeatherEffects {

  constructor(
    private _weatherService: WeatherService,
    private _actions$: Actions
  ) { }

  @Effect()
  getWeather$ = this._actions$.pipe(
    ofType<WeatherByCityLoad>(EWeatherActions.WEATHER_BY_CITY_LOAD),
    switchMap((action) => {
      return this._weatherService.getWeatherByCity(action.payload).pipe(
        map((weather: IWeather) =>
          new WeatherByCitySuccess(weather)
        ),
        catchError((error) => of(new WeatherByCityFail(error)))
      )
    }
    ));

}
