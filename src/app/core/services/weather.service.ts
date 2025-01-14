import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, timer } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { WeatherCondition, WrapperWeatherCondition } from '../models';

@Injectable()
export class WeatherService {
  static URL = 'https://api.openweathermap.org/data/2.5';
  static APPID = '5a4b2d457ecbef9eb2a71e480b947604';
  static ICON_URL =
    'https://raw.githubusercontent.com/udacity/Sunshine-Version-2/sunshine_master/app/src/main/res/drawable-hdpi/';

  constructor(private http: HttpClient) {}

  private _fetchWeatherCondition(
    zipcode: string,
    nation: string
  ): Observable<WeatherCondition> {
    return this.http.get<WeatherCondition>(
      `${WeatherService.URL}/weather?zip=${zipcode},${nation}&units=imperial&APPID=${WeatherService.APPID}`
    );
  }

  getWeatherConditionByZipCodeAndNation(
    zipCode: string,
    nation: string
  ): Observable<WrapperWeatherCondition> {
    return timer(0, 30000).pipe(
      switchMap(() => this._fetchWeatherCondition(zipCode, nation)),
      map((response) => ({ error: false, data: response })),
      catchError((err: HttpErrorResponse) => {
        return of({ error: true, data: err.error });
      })
    );
  }

  getForecast(zipCode: string, nation: string): Observable<any> {
    // Here we make a request to get the forecast data from the API. Note the use of backticks and an expression to insert the zipcode
    return this.http.get(
      `${WeatherService.URL}/forecast/daily?zip=${zipCode},${nation}&units=imperial&cnt=5&APPID=${WeatherService.APPID}`
    );
  }

  getWeatherIcon(id) {
    if (id >= 200 && id <= 232)
      return WeatherService.ICON_URL + 'art_storm.png';
    else if (id >= 501 && id <= 511)
      return WeatherService.ICON_URL + 'art_rain.png';
    else if (id === 500 || (id >= 520 && id <= 531))
      return WeatherService.ICON_URL + 'art_light_rain.png';
    else if (id >= 600 && id <= 622)
      return WeatherService.ICON_URL + 'art_snow.png';
    else if (id >= 801 && id <= 804)
      return WeatherService.ICON_URL + 'art_clouds.png';
    else if (id === 741 || id === 761)
      return WeatherService.ICON_URL + 'art_fog.png';
    else return WeatherService.ICON_URL + 'art_clear.png';
  }
}
