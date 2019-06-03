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
      new Car(1, 'Honda', 'Beschreibung', 1299.99),
      new Car(2, 'BMW', 'Tolles Auto', 1300.99),
      new Car(3, 'Mercedes', 'Kaputte Reifen', 399.99),
      new Car(4, 'Honda', 'Kein Motor', 300.99),
      new Car(5, 'Renault', 'Klasse!', 999.99),
    ];
  }

  getCars(): Observable<Car[]> {
    return of(this.cars);
  }

  getCar(id: number): Observable<Car> {
    return of(this.cars[id]);
  }
}
