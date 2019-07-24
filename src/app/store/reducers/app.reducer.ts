import { ActionReducerMap } from '@ngrx/store';

import { IAppState } from '../states/app.state';
import { WeatherReducers } from '../reducers/weather.reducer';

export const AppReducers: ActionReducerMap<IAppState, any> = {
    weather: WeatherReducers
};
