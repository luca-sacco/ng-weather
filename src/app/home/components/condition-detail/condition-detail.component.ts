import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocationData, WrapperWeatherCondition } from 'app/core/models';
import { LocationService, WeatherService } from 'app/core/services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-condition-detail',
  templateUrl: './condition-detail.component.html',
  styleUrls: ['./condition-detail.component.css'],
})
export class ConditionDetailComponent implements OnInit {
  @Input() location: LocationData;

  weatherInfo$: Observable<WrapperWeatherCondition>;

  constructor(
    public locationService: LocationService,
    private weatherService: WeatherService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.weatherInfo$ =
      this.weatherService.getWeatherConditionByZipCodeAndNation(
        this.location.zipCode,
        this.location.nation
      );
  }

  goToForecast(location: LocationData) {
    this.router.navigate(['/forecast'], { queryParams: location });
  }

  showForecast(zipcode: string) {
    this.router.navigate(['/forecast', zipcode]);
  }
}
