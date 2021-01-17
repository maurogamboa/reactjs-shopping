import React, { Dispatch } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ShopItem, ShopList } from "../models/ShopItem";
import { deleteItemToShoppingCar } from "../store/actions";
import { ShoppingCarActionTypes, ShoppingCarState } from "../store/types/shoppingCarTypes";

function ShoppingCartItem(item: ShopItem) {
  const dispatch: Dispatch<ShoppingCarActionTypes> = useDispatch();
  
  return (
    <li
      key={item.id}
    >
      {item.text}
      <button onClick={() => dispatch(deleteItemToShoppingCar(item.id))}>
        Delete
      </button>
    </li>    
  )
}

export default function ShoppingCart() {
  const items = useSelector<ShoppingCarState, ShopList>(
    (state) => state.items,
    )

  return (
    <div>
      <p>Shopping Car</p>
      <ol>
        {items.map((item) => ShoppingCartItem(item))}
      </ol>
    </div>
  )
}