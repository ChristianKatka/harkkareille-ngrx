import { createAction, props } from '@ngrx/store';
import { Car, DraftCar } from 'src/app/models/car.model';

export const createCar = createAction(
  '[Car] Create Car',
  props<{ carDraft: DraftCar }>()
);

export const createCarSuccess = createAction(
  '[Car] Create Car Success',
  props<{ car: Car }>()
);

export const deleteCar = createAction(
  '[Car] Delete Car',
  props<{ carId: string }>()
);
