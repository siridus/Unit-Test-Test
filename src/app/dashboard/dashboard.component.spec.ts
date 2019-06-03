import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let dashboardComponent: DashboardComponent;
  beforeEach(() => {
    dashboardComponent = new DashboardComponent();
  });

  afterEach(() => {
    dashboardComponent = null;
  });

  it('should create the Dashboard', () => {
    expect(dashboardComponent).toBeTruthy();
  });
});
