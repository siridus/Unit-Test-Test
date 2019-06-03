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
      new Car('Honda', 150, 'Beschreibung'),
      new Car('BMW', 2000, 'Tolles Auto'),
      new Car('Mercedes', 111, 'Kaputte Reifen'),
      new Car('Honda', 344, 'Kein Motor'),
      new Car('Renault', 150, 'Klasse!'),
    ];
  }

  getCars(): Observable<Car[]> {
    return of(this.cars);
  }

  getCar(id: number): Observable<Car> {
    return of(this.cars[id]);
  }
}
