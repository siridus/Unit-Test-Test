import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  carList: Array<Car>;
  constructor(private carsService: CarsService) {
  }

  ngOnInit() {
    this.getCars();
  }

  getCars(): void {
    // Set cars the return var of carsService.getCars and then use it as value for this.carList
    this.carsService.getCars().subscribe(cars => this.carList = cars);
  }
}
