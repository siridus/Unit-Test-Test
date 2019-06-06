import { CarListComponent } from './car-list.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { CarsService } from '../cars.service';

describe('CarListComponent', () => {
  let carListComponent: CarListComponent;
  let carListFixture: ComponentFixture<CarListComponent>;
  let debugElements: DebugElement[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarListComponent],
      providers: [CarsService],
      imports: [RouterTestingModule]
    });

    carListFixture = TestBed.createComponent(CarListComponent);
    carListComponent = carListFixture.componentInstance;
  });

  it('should create an empty array of cars', () => {
    expect(carListComponent.carList).toBeUndefined();
  });

  it('should create an filled array of cars', () => {
    carListComponent.getCars();
    expect(carListComponent.carList).toBeTruthy();
  });

  it('should create no links at all', () => {
    debugElements = carListFixture.debugElement.queryAll(By.css('a'));
    expect(debugElements.length).toBe(0);
  });

  it('should create links', () => {
    carListFixture.detectChanges();
    debugElements = carListFixture.debugElement.queryAll(By.css('a'));
    // spyOn(carListComponent, 'getCars').and.returnValue(MOCKCARS);
    expect(debugElements.length).toBeGreaterThan(0);
  });

  it('should change car.available to false when car uses changeAvailable()', () => {
    carListComponent.getCars();
    carListComponent.carList.forEach(car => {
      car.changeAvailable();
      expect(car.available).toBeFalsy();
    });
  });
});
