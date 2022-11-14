import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocationData, WeatherCondition } from 'app/core/models';
import { WeatherService } from 'app/core/services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-condition-detail',
  templateUrl: './condition-detail.component.html',
  styleUrls: ['./condition-detail.component.css'],
})
export class ConditionDetailComponent implements OnInit {
  @Input() location: LocationData;

  weather$: Observable<WeatherCondition>;

  constructor(private weatherService: WeatherService, private router: Router) {}

  ngOnInit(): void {
    this.weather$ = this.weatherService.getWeatherConditionByZipCodeAndNation(
      this.location.zipCode,
      this.location.nation
    );
  }
}
