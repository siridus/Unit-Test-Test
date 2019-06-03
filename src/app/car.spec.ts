import { Car } from './car';


let car: Car;

beforeEach(() => {
  car = new Car('Test', 10, 'Beschreibung');
});

afterEach(() => {
  car = null;
});

describe('Car', () => {
  it('should create an instance', () => {
    expect(car).toBeTruthy();
  });

  it('should return type "Test"', () => {
    expect(car.getType()).toBe('Test');
  });

  it('should return type "10"', () => {
    expect(car.getValue()).toBe(10);
  });

  it('should return type "Test"', () => {
    expect(car.getDescription()).toBe('Beschreibung');
  });
});
