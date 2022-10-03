import { ToastrService } from 'ngx-toastr';
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
    private readonly weatherSvc: WeatherService,
    private toastr: ToastrService
  ) {}

  onSearchWeatherCity(city: string) {
    this.weatherSvc.searchWeatherCity(city).subscribe(
      (resOk) => {
        this.objectWeather = resOk;
        this.toastr.success('Se encontro la ciudad', '!Exito¡');
      },
      (resFail) => {
        this.toastr.error('No se encontro la ciudad', 'Error');
      }
    );
  }
}
