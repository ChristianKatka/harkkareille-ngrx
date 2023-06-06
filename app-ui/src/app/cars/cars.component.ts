import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Car } from '../models/car.model';

@Component({
  selector: 'app-cars',
  templateUrl: 'cars.component.html',
  styleUrls: ['cars.component.scss'],
})
export class CarsComponent {
  @Input()
  cars!: Car[];

  @Output()
  submitDeleteCar: EventEmitter<string> = new EventEmitter();

  deleteCar(carId: string) {
    this.submitDeleteCar.next(carId);
  }
}
