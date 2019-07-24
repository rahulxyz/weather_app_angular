import { Component, OnInit, OnChanges } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from './store/states/app.state';
import { WeatherByCityLoad, WeatherByCitySuccess } from './store/actions/weather.actions';
import { getLoaderStatus, getWeatherList, getForecastList, getError } from './store/selectors/weather.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'weatherApp';
  searchKey: string;
  weatherToday$ = this._store.pipe(select(getWeatherList));
  forecast$ = this._store.pipe(select(getForecastList));
  errorMessage$ = this._store.pipe(select(getError));
  loader$ = this._store.pipe(select(getLoaderStatus))

  constructor(private _store: Store<IAppState>) {

  }

  ngOnInit() {
    this._store.dispatch(new WeatherByCityLoad('London'));
  }

  searchByCity() {
    this._store.dispatch(new WeatherByCityLoad(this.searchKey));
  }

}

