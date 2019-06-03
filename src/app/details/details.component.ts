import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CarsService } from '../cars.service';
import { Car } from '../car';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {
  selectedCar: Car;
  constructor(private route: ActivatedRoute, private carsService: CarsService, private location: Location) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.carsService.getCar(id).subscribe(car => this.selectedCar = car);
  }
}
