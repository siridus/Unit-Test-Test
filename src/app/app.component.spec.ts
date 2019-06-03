import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let appComponent: AppComponent;

  beforeEach(() => {
    appComponent = new AppComponent();
  });

  afterEach(() => {
    appComponent = null;
  });

  it('should have the title "CarApp"', () => {
    expect(appComponent.title).toBe('CarApp');
  });
});
