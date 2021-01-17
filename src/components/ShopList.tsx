import React from "react";
import { ShopMockList } from "../services/shop.service";
import { ShopItem }  from "../models/ShopItem";
import ShopItemCard from "../components/ShopListCard"

function insertItem(item: ShopItem) {
  return (
    <ShopItemCard 
      key={item.id}
      id={item.id}
      text={item.text} 
      description={item.description}
      urlSmallImage={item.urlSmallImage}
    />    
  )
}

export default function ShopItemList() {
  return (
    <div>
      {ShopMockList.map(item => insertItem(item))}
    </div>
  )
}