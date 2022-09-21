import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Weather } from '../models/weather';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private readonly API_KEY = environment.api_key;
  constructor(private readonly http: HttpClient) {}

  searchWeatherCity(city: string): Observable<Weather> {
    return this.http.get<Weather>(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.API_KEY}&lang=es`
    );
  }
}
