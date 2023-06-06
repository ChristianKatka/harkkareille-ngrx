import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Car, DraftCar } from '../models/car.model';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  createId = () => {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return '_' + Math.random().toString(36).substr(2, 9);
  };
  constructor() {}

  createCar(carDraft: DraftCar): Observable<Car> {
    const car = { ...carDraft, id: this.createId() };
    return of(car);
  }
}
