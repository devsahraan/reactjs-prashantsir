import React, { useEffect, useState } from "react";
import Item from "./Item";

function FoodItem({foodItems}) {

  let [activeItems , setActiveItems] = useState([]);

  useEffect(()=>{
      console.log(activeItems);
  },[activeItems])

  let handleBuyButtonClicked = (item) => {
      console.log(`${item} being bought`);
      let newItems = [...activeItems , item];
      setActiveItems(newItems);
  };

  let handleRemoveButtonClicked = (item) => {
    console.log(`${item} being removed`);
    let newItems = activeItems.filter(val => val != item);
    setActiveItems(newItems);
  }


  return (
    <div className="list-group">
      {foodItems.map((item , index) => (
        <Item key={index} foodItem={item} active={activeItems.includes(item)} handleBuyButton={()=> handleBuyButtonClicked(item)} handleRemoveButton = {()=> handleRemoveButtonClicked(item)}></Item>
      ))}
    </div>
  );
}

export default FoodItem;
