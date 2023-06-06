import { createSelector } from '@ngrx/store';

import { getCarState } from '../reducers';

export const getCars = createSelector(
  getCarState,
  (state) => Object.values(state.cars)
);
