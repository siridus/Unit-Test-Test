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

  it('getType() should return string "Test"', () => {
    expect(car.getType()).toBe('Test');
  });

  it('getValue() should return number 10', () => {
    expect(car.getValue()).toBe(10);
  });

  it('getDescriptione() should return string "Beschreibung"', () => {
    expect(car.getDescription()).toBe('Beschreibung');
  });
});
