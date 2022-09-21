import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { WeatherPageComponent } from './pages/weather-page/weather-page.component';
import { ParamsSearchPageComponent } from './components/params-search-page/params-search-page.component';
import { DetailsWeatherPageComponent } from './components/details-weather-page/details-weather-page.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    WeatherPageComponent,
    ParamsSearchPageComponent,
    DetailsWeatherPageComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, ReactiveFormsModule],
})
export class HomeModule {}
