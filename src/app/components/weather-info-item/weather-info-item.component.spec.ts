import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherInfoItemComponent } from './weather-info-item.component';

describe('WeatherInfoItemComponent', () => {
  let component: WeatherInfoItemComponent;
  let fixture: ComponentFixture<WeatherInfoItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherInfoItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherInfoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
