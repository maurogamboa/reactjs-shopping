import { ShopItem, ShopList } from "../../models/ShopItem";

export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';

interface AddItemShoppingCarAction {
  type: typeof ADD_ITEM
  payload: ShopItem
}

interface DeleteItemShoppingCarAction {
  type: typeof DELETE_ITEM
  payload: { id: string }
}

export interface ShoppingCarState {
  items: ShopList
}

export type ShoppingCarActionTypes = AddItemShoppingCarAction | DeleteItemShoppingCarAction;
