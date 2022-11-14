import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseComponent } from 'app/core/components/base-component';
import { WeatherService } from 'app/core/services';
import { switchMap, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-forecasts-list',
  templateUrl: './forecasts-list.component.html',
  styleUrls: ['./forecasts-list.component.css'],
})
export class ForecastsListComponent extends BaseComponent implements OnInit {
  zipcode: string;
  forecast: any;

  constructor(
    private weatherService: WeatherService,
    private route: ActivatedRoute
  ) {
    super();
  }
  ngOnInit() {
    this.route.queryParamMap
      .pipe(
        switchMap((params) => {
          return this.weatherService.getForecast(
            params.get('zipCode'),
            params.get('nation')
          );
        }),
        takeUntil(this.destroy$)
      )
      .subscribe((values) => (this.forecast = values));
  }
}
