import React from "react";
import { useSelector } from "react-redux";
import { ShopList } from "../models/ShopItem";
import { ShoppingCarState } from "../store/types/shoppingCarTypes";

export default function ShoppingCarElement() {
const items = useSelector<ShoppingCarState, ShopList>(
    (state) => state.items,
    )

  return (
    <React.Fragment>
      Cart ({items.length})
    </React.Fragment>
  )
}