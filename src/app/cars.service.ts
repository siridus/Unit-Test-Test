import { Injectable } from '@angular/core';
import { Car } from './car';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CarsService {
  cars: Car[];

  constructor() {
    this.cars = [
      new Car('Honda', 150),
      new Car('BMW', 2000),
      new Car('Mercedes', 111),
      new Car('Honda', 344),
      new Car('Renault', 150),
    ];
  }

  getCars(): Observable<Car[]> {
    return of(this.cars);
  }
}
