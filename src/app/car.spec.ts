import { Car } from './car';


let car: Car;

beforeEach(() => {
  car = new Car(10, 'Test', 'Beschreibung', 1000);
});

afterEach(() => {
  car = null;
});

describe('Car', () => {
  it('should create an instance', () => {
    expect(car).toBeTruthy();
  });

  it('id should return number 10', () => {
    expect(car.id).toBe(10);
  });

  it('type should return string "Test"', () => {
    expect(car.type).toBe('Test');
  });

  it('description should return string "Beschreibung"', () => {
    expect(car.description).toBe('Beschreibung');
  });

  it('price should return string 1000', () => {
    expect(car.price).toBe(1000);
  });
});
