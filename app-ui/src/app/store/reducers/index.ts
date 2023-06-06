import {
  createFeatureSelector,
  ActionReducerMap,
} from '@ngrx/store';

import * as fromCars from './cars.reducer';

export interface AppState {
  car: fromCars.CarState;
}

export const reducers: ActionReducerMap<AppState> = {
  car: fromCars.reducer,
};

export const getCarState = createFeatureSelector<fromCars.CarState>('car');
