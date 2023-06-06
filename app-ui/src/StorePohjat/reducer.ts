import { createReducer, on, Action } from "@ngrx/store";
import { Item } from "model";
import { AuthenticatedActions } from "actions";
import { ItemActions } from "/actions";

export interface ItemState {
  entities: { [id: string]: Item };
  selectedItemId: string | undefined;
  editing: boolean;
  loading: boolean;
}

export const initialState: ItemState = {
  entities: {},
  selectedItemId: undefined,
  editing: false,
  loading: false,
};

const itemReducer = createReducer(
  initialState,

  on(ItemActions.CreateSuccess, (state, { item }) => ({
    ...state,
    entities: {
      ...state.entities,
      [item.id]: {
        ...item,
      },
    },
  })),

  on(ItemActions.GetAllSuccess, (state, { items }) => {
    const entities = items.reduce(
      (itemEntities: { [id: string]: Item }, item: Item) => ({
        ...itemEntities,
        [item.id]: item,
      }),
      {}
    );
    return {
      ...state,
      entities,
    };
  }),
  on(ItemActions.updateSuccess, (state, { item }) => ({
    ...state,
    entities: {
      ...state.entities,
      [item.id]: {
        ...item,
      },
    },
  })),
  on(ItemActions.deleteSuccess, (state, { itemId }) => {
    const entities = {
      ...state.entities,
    };
    delete entities[itemId];

    return {
      ...state,
      entities,
    };
  }),
  on(ItemActions.selectItem, (state, { itemId }) => ({
    ...state,
    selectedItemId: itemId,
  })),
  on(ItemActions.clearItemSelection, (state) => ({
    ...state,
    selectedItemId: undefined,
  })),

  on(AuthenticatedActions.signOut, (state) => initialState)
);

export const reducer = (state: ItemState | undefined, action: Action) =>
  itemReducer(state, action);
