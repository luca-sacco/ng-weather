import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LocationData } from '../models';

export const LOCATIONS: string = 'locations';

@Injectable()
export class LocationService {
  private locations$: BehaviorSubject<LocationData[]> = new BehaviorSubject([]);

  constructor() {
    const locString = localStorage.getItem(LOCATIONS);
    if (locString) {
      this.locations$.next(JSON.parse(locString));
    }
  }

  getLocations(): Observable<LocationData[]> {
    return this.locations$.asObservable();
  }

  addLocation({ zipCode, nation }) {
    this.locations$.value.push({ zipCode, nation });
    this.locations$.next(this.locations$.value);
    localStorage.setItem(LOCATIONS, JSON.stringify(this.locations$.value));
  }

  removeLocation(zipcode: string, nation: string) {
    let index = this.locations$.value.findIndex(
      (location) => location.zipCode === zipcode && location.nation === nation
    );
    if (index !== -1) {
      this.locations$.value.splice(index, 1);
      localStorage.setItem(LOCATIONS, JSON.stringify(this.locations$.value));
    }
  }
}
