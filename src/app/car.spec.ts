import { Car } from './car';

describe('Car', () => {
  it('should create an instance', () => {
    expect(new Car('Test', 10, 'Beschreibung')).toBeTruthy();
  });
});
