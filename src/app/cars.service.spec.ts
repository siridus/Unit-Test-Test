import { CarsService } from './cars.service';


describe('CarsService', () => {
  let carsService: CarsService;
  beforeEach(() => {
    carsService = new CarsService();
  });

  afterEach(() => {
    carsService = null;
  });

  it('should create the carsService', () => {
    expect(carsService).toBeTruthy();
  });

  it('should return the Observeable<Car[]>', () => {
    const cars = carsService.getCars();
    expect(cars).toBeTruthy();
  });

  it('should return a Observeable<Car>', () => {
    const car = carsService.getCar(0);
    expect(car).toBeTruthy();
  });

});
