import { createSelector } from "@ngrx/store";
import { getItemState } from "../reducers";

export const getItems = createSelector(getItemState, (state) =>
  Object.values(state.entities)
);

export const getIsLoading = createSelector(
  getItemState,
  (state) => state.loading
);
