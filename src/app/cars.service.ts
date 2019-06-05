import { Injectable } from '@angular/core';
import { Car } from './car';
import { Observable, of } from 'rxjs';
import { MOCKCARS } from './mock-cars';

@Injectable({
  providedIn: 'root'
})

export class CarsService {
  cars: Car[];

  constructor() {
    this.cars = MOCKCARS;
  }

  getCars(): Observable<Car[]> {
    return of(this.cars);
  }

  getCar(id: number): any {
    let returnedValue: any = false;
    this.cars.forEach(element => {
      if (element.id === id) {
        returnedValue = element;
      }
    });
    return of(returnedValue);
  }
}
