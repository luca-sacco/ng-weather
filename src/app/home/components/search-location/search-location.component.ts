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
  nations$: Observable<LabelValue[]>;
  form: FormGroup;

  constructor(
    private service: LocationService,
    private countyService: CountryService
  ) {}

  ngOnInit(): void {
    this._initForm();
  }

  private _initForm() {
    this.form = new FormGroup({
      zipCode: new FormControl('', Validators.required),
      nation: new FormControl('', Validators.required),
    });
    this.nations$ = this.countyService.getAllCountries();
  }

  search(term: string, item: LabelValue) {
    return false;
  }

  addLocation() {
    return this.service.addLocation(this.form.value);
  }
}
