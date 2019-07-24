import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherInfoTodayComponent } from './weather-info-today.component';

describe('WeatherInfoTodayComponent', () => {
  let component: WeatherInfoTodayComponent;
  let fixture: ComponentFixture<WeatherInfoTodayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherInfoTodayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherInfoTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
