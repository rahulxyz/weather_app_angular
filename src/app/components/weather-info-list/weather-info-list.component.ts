import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'weather-info-list',
  templateUrl: './weather-info-list.component.html',
  styleUrls: ['./weather-info-list.component.css']
})
export class WeatherInfoListComponent implements OnInit {

  //index = [1, 2, 3, 4, 5, 6, 7];
  @Input() forecast;
  forecastList: any;

  constructor() { }

  ngOnInit() {
    this.forecast.subscribe((data) => {
      this.forecastList = data;
    })
  }

}
