import { WeatherActions, EWeatherActions } from '../actions/weather.actions';
import { IWeatherState, initialWeatherState } from '../states/weather.state';

export const WeatherReducers = (state = initialWeatherState, action: WeatherActions): IWeatherState => {
    switch (action.type) {
        case EWeatherActions.WEATHER_BY_CITY_LOAD: {
            return {
                ...state,
                loader: {
                    hasLoaded: false
                }
            }
        }

        case EWeatherActions.WEATHER_BY_CITY_SUCCESS: {
            return {
                ...state,
                location: action.payload.location,
                current: action.payload.current,
                forecast: action.payload.forecast,
                error: {
                    hasError: false,
                    errorStatus: 200
                },
                loader: {
                    hasLoaded: true
                }
            };
        }
        case EWeatherActions.WEATHER_BY_CITY_FAIL: {
            return {
                ...state,
                error: {
                    hasError: true,
                    errorStatus: 500
                },
                loader: {
                    hasLoaded: true
                }
            }
        }

        default: return state;
    }
}