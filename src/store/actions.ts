import { ShopItem } from "../models/ShopItem";
import {
  ADD_ITEM,
  DELETE_ITEM,
  ShoppingCarActionTypes,
} from "./types/shoppingCarTypes";

export function addItemToShoppingCar(
  newItem: ShopItem
): ShoppingCarActionTypes {
  return {
    type: ADD_ITEM,
    payload: newItem,
  };
}

export function deleteItemToShoppingCar(id: string): ShoppingCarActionTypes {
  return {
    type: DELETE_ITEM,
    payload: {
      id,
    },
  };
}
