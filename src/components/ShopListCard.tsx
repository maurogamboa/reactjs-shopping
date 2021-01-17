import React, { Dispatch, useState } from "react";
import { useDispatch } from "react-redux";
import { ShopItem } from "../models/ShopItem";
import { addItemToShoppingCar } from "../store/actions";
import { ShoppingCarActionTypes } from "../store/types/shoppingCarTypes";


export default function ShopItemCard(info: ShopItem) {
  // const [cuenta, setCuenta] = useState(0);
  const dispatch: Dispatch<ShoppingCarActionTypes> = useDispatch();

  return (
    <div className="item-car">
      <h2>{info.text}</h2>
      <p>{info.description}</p>
      <button onClick={() => dispatch(addItemToShoppingCar(info))}>
          Add to cart
        </button>
    </div>
    
  )
}