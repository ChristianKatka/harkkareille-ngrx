import { createReducer, on, Action } from '@ngrx/store';
import { CarActions } from '../actions';
import { Car } from 'src/app/models/car.model';

export interface CarState {
  cars: { [id: string]: Car };
  editing: boolean;
  loading: boolean;
}

export const initialState: CarState = {
  cars: {},
  editing: false,
  loading: false,
};

const carReducer = createReducer(
  initialState,

  on(CarActions.createCar, (state) => ({
    ...state,
    loading: true,
  })),
  on(CarActions.createCarSuccess, (state, { car }) => ({
    ...state,
    loading: false,
    cars: { ...state.cars, [car.id]: car },
  })),
  on(CarActions.deleteCar, (state, { carId }) => {
    const cars = {
      ...state.cars,
    };
    delete cars[carId];
    return { ...state, cars };
  })
);

export const reducer = (state: CarState | undefined, action: Action) =>
  carReducer(state, action);
