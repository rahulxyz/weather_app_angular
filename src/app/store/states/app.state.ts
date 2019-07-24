//import { RouterReduceState} from '@ngrx/router-store';
import { IWeatherState, initialWeatherState } from './weather.state'


export interface IAppState {
    weather: IWeatherState
}

export const initialAppState: IAppState = {
    weather: initialWeatherState
}

export function getInitialState(): IAppState {
    return initialAppState;
}