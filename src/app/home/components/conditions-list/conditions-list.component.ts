import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocationData } from 'app/core/models';
import { Observable } from 'rxjs';
import { LocationService } from '../../../core/services/location.service';

@Component({
  selector: 'app-conditions-list',
  templateUrl: './conditions-list.component.html',
  styleUrls: ['./conditions-list.component.css'],
})
export class ConditionsListComponent implements OnInit {
  locations$: Observable<LocationData[]>;

  constructor(
    private locationService: LocationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.locations$ = this.locationService.getLocations();
  }

  showForecast(zipcode: string) {
    this.router.navigate(['/forecast', zipcode]);
  }
}
