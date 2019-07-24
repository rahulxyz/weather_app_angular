import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'weather-info-item',
  templateUrl: './weather-info-item.component.html',
  styleUrls: ['./weather-info-item.component.css']
})
export class WeatherInfoItemComponent implements OnInit {

  @Input() forecastItem;
  constructor() { }

  ngOnInit() {

  }

}
