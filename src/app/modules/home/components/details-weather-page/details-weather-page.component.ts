import { Component, Input } from '@angular/core';
import { Weather } from '@modules/home/models/weather';

@Component({
  selector: 'app-details-weather-page',
  templateUrl: './details-weather-page.component.html',
  styleUrls: ['./details-weather-page.component.scss']
})
export class DetailsWeatherPageComponent {
  @Input() objectWeather!:Weather;
  constructor() { }

}
