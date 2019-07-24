import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'weather-info-today',
  templateUrl: './weather-info-today.component.html',
  styleUrls: ['./weather-info-today.component.css']
})
export class WeatherInfoTodayComponent implements OnInit, OnChanges {


  @Input() weatherToday;
  options = {
    time: '',
    date: '',
    iconUrl: '',
    temp_c: '',
    wind_kph: '',
    pressure_in: '',
    weatherText: ''
  };

  constructor() { }

  ngOnInit() {
    this.weatherToday.subscribe(state => {
      if (state.location != null && state.current != null) {
        this.options.time = state.current.last_updated.split(" ")[1];
        this.options.date = state.current.last_updated.split(" ")[0];
        this.options.iconUrl = state.current.condition.icon;
        this.options.temp_c = state.current.temp_c.toString();
        this.options.wind_kph = state.current.wind_kph.toString();
        this.options.pressure_in = state.current.pressure_in.toString();
        this.options.weatherText = state.current.condition.text.toString();
      }

    })

  }

  ngOnChanges() {
  }


}
