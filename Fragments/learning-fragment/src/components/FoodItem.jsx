import React from "react";
import Item from "./Item";

function FoodItem({foodItems}) {

  return (
    <div className="list-group">
      {foodItems.map((item) => (
        <Item key={item} foodItem={item}></Item>
      ))}
    </div>
  );
}

export default FoodItem;
