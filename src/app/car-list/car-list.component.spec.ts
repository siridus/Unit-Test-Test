import { CarListComponent } from './car-list.component';
import { CarsService } from '../cars.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('CarListComponent', () => {
  let carListComponent: CarListComponent;
  let carListFixture: ComponentFixture<CarListComponent>;
  let carsService: CarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarListComponent],
      providers: [CarsService],
      imports: [RouterTestingModule]
    });

    carListFixture = TestBed.createComponent(CarListComponent);
    carListComponent = carListFixture.componentInstance;
    carsService = TestBed.get(CarsService);
  });

  it('should create an empty array of cars', () => {
    expect(carListComponent.carList).toBeUndefined();
  });

  it('should create an filled array of cars', () => {
    carListComponent.getCars();
    expect(carListComponent.carList).toBeTruthy();
  });
});
