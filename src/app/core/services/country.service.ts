import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LabelValue } from '../models';

@Injectable()
export class CountryService {
  static URL = 'https://restcountries.com/v3.1/';

  constructor(private http: HttpClient) {}

  getAllCountries(): Observable<LabelValue[]> {
    return this.http.get(`${CountryService.URL}/all`).pipe(
      map((response: { name: { common: string }; cca2: string }[]) => {
        return response.map((countyInfo) => ({
          label: countyInfo.name.common,
          value: countyInfo.cca2,
        }));
      })
    );
  }
}
