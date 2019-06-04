import { Injectable } from '@angular/core';
import { Car } from './car';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

const MOCKCARS: Car[] = [
  new Car(1, 'Honda', 'Beschreibung', 1299.99),
  new Car(2, 'BMW', 'Tolles Auto', 1300.99),
  new Car(3, 'Mercedes', 'Kaputte Reifen', 399.99),
  new Car(4, 'Honda', 'Kein Motor', 300.99),
  new Car(5, 'Renault', 'Klasse!', 999.99),
];


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
      console.log(element);
      if (element.id === id) {
        returnedValue = element;
      }
    });
    return of(returnedValue);
  }
}
