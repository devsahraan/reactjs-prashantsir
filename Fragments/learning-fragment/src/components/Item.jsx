import React from "react";
import styles from "./Item.module.css";

function Item({foodItem , active ,  handleBuyButton , handleRemoveButton}) {
  // let { foodItem , handleBuyButton } = props; // destructing array

  


  return (
    <div className={`list-group-item ${styles["kg-item"]} ${active && 'active' }`}>
      <span className={`${styles["kg-span"]}`}>{foodItem}</span>
      <button
        onClick={handleBuyButton}
        className={`${styles.button} btn btn-info`}
      >
        Buy
      </button>
       <button
        onClick={handleRemoveButton}
        className={`${styles.button} btn btn-danger`}
      >
        Remove
      </button>
    </div>
  );
}

export default Item;
