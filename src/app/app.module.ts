import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { WeatherInfoTodayComponent } from './components/weather-info-today/weather-info-today.component';
import { WeatherInfoItemComponent } from './components/weather-info-item/weather-info-item.component';
import { WeatherInfoListComponent } from './components/weather-info-list/weather-info-list.component';
/* import { RouterReduceState } from '@ngrx/router-state'; */
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { environment } from '../environments/environment';
import { WeatherEffects } from './store/effects/weather.effects';
import { WeatherService } from './services/weather.service';
import { AppReducers } from './store/reducers/app.reducer';
import { ErrorComponent } from './components/error/error.component';
import { ReadableDatePipe } from './filterPipes/readable-date.pipe';
@NgModule({
  declarations: [
    AppComponent,
    WeatherInfoTodayComponent,
    WeatherInfoItemComponent,
    WeatherInfoListComponent,
    ErrorComponent,
    ReadableDatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(AppReducers),
    EffectsModule.forRoot([WeatherEffects]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    AppRoutingModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
