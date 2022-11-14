import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LabelValue } from 'app/core/models';
import { CountryService } from 'app/core/services/country.service';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { LocationService } from '../../../core/services/location.service';

@Component({
  selector: 'app-search-location',
  templateUrl: './search-location.component.html',
})
export class SearchLocationComponent implements OnInit {
  selectedNation: LabelValue;
  nations$: Observable<LabelValue[]>;
  form: FormGroup;

  constructor(
    private service: LocationService,
    private countyService: CountryService
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      zipCode: new FormControl('', Validators.required),
      nation: new FormControl('', Validators.required),
    });
    this.nations$ = this.countyService.getAllCountries();
  }

  addLocation() {
    this.service.addLocation(this.form.value);
  }
}
