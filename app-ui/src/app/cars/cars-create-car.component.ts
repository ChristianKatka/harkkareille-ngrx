import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DraftCar } from '../models/car.model';
@Component({
  selector: 'app-cars-create-car',
  templateUrl: 'cars-create-car.component.html',
  styleUrls: ['cars-create-car.component.scss'],
})
export class CarsCreateCarComponent {
  @Output()
  createCarFormSubmit: EventEmitter<DraftCar> = new EventEmitter();

  createCarForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
  });

  submit(): void {
    this.createCarFormSubmit.emit(this.createCarForm.value);
  }
}
