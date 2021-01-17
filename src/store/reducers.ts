import { ADD_ITEM, DELETE_ITEM, ShoppingCarActionTypes, ShoppingCarState } from "./types/shoppingCarTypes";

const initialState: ShoppingCarState = {
  items: [],
};

export function reducerShoppingCar(
  state = initialState,
  action: ShoppingCarActionTypes
): ShoppingCarState {
  switch (action.type) {
    case ADD_ITEM:
      return {
        items: [...state.items, action.payload],
      };
    case DELETE_ITEM:
      return {
        items: state.items.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
}
