import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/reducers';
import { CarActions } from '../store/actions';
import { CarSelectors } from '../store/selectors';
import { DraftCar } from '../models/car.model';

@Component({
  templateUrl: 'cars.container.html',
  styleUrls: ['cars.container.scss'],
})
export class CarsContainerComponent {
  cars$ = this.store.select(CarSelectors.getCars);

  constructor(private store: Store<AppState>) {}

  createCarSubmitted(carDraft: DraftCar) {
    this.store.dispatch(CarActions.createCar({ carDraft }));
  }

  deleteCar(carId: string) {
    this.store.dispatch(CarActions.deleteCar({ carId }));
  }
}
