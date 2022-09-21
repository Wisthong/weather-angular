import { Component } from '@angular/core';
import { Weather } from '@modules/home/models/weather';
import { WeatherService } from '@modules/home/service/weather.service';

@Component({
  selector: 'app-weather-page',
  templateUrl: './weather-page.component.html',
  styleUrls: ['./weather-page.component.scss'],
})
export class WeatherPageComponent {
  objectWeather!: Weather;
  constructor(
    private readonly weatherSvc:WeatherService,) {}

  onSearchWeatherCity(city: string) {
    this.weatherSvc.searchWeatherCity(city).subscribe((resOk=>{
      this.objectWeather = resOk;
      console.log(this.objectWeather);
    }),(resFail=>{

    }))
  }
}
