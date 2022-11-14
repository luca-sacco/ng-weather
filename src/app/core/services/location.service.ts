import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
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
    return of('').pipe(delay(1000));
  }

  removeLocation({ zipCode, nation }) {
    const locations = this.locations$.value;
    let index = locations.findIndex(
      (location) => location.zipCode === zipCode && location.nation === nation
    );
    if (index !== -1) {
      locations.splice(index, 1);
      this.locations$.next(locations);
      localStorage.setItem(LOCATIONS, JSON.stringify(this.locations$.value));
    }
  }
}
