import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarListComponent } from './car-list.component';
import { Car } from '../car';
import { CarsService } from '../cars.service';

describe('CarListComponent', () => {
  let carsService: CarsService;
  let carListComponent: CarListComponent;

  beforeEach(() => {
    carsService = new CarsService();
    carListComponent = new CarListComponent(carsService);
  });

  afterEach(() => {
    carListComponent = null;
    carsService = null;
  });

  it('should create a carsService', () => {
    expect(carsService).toBeTruthy();
  });

  it('should create an empty array of cars', () => {
    expect(carListComponent.carList).toBeUndefined();
  });
});
