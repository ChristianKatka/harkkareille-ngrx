import { createAction, props } from "@ngrx/store";
import { Item, ItemDraft } from "./model";

export const createItem = createAction(
  "[Item] Create Item",
  props<{ itemDraft: ItemDraft }>()
);
export const createItemSuccess = createAction(
  "[Item] Create Item Success",
  props<{ item: Item }>()
);
export const createItemFailure = createAction(
  "[Item] Create Item Failure",
  props<{ error: string }>()
);

export const getAllItems = createAction("[Item] Get All Items");
export const getAllItemsSuccess = createAction(
  "[Item] Get All Items Success",
  props<{ items: Item[] }>()
);
export const getAllItemsFailure = createAction(
  "[Item] Get All Items Failure",
  props<{ error: string }>()
);

export const updateItem = createAction(
  "[Item] Update Item",
  props<{ updatedItem: Item }>()
);
export const updateItemSuccess = createAction(
  "[Item] Update Item Success",
  props<{ item: Item }>()
);
export const updateItemFailure = createAction(
  "[Item] Update Item Failure",
  props<{ error: string }>()
);

export const deleteItem = createAction(
  "[Item] Delete Item",
  props<{ item: Item }>()
);
export const deleteItemSuccess = createAction(
  "[Item] Delete Item Success",
  props<{ itemId: string }>()
);
export const deleteItemFailure = createAction(
  "[Item] Delete Item Failure",
  props<{ error: string }>()
);

export const selectItem = createAction(
  "[Item] Select Item",
  props<{ itemId: string }>()
);
export const clearItemSelection = createAction("[Item] Clear Item Selection");
