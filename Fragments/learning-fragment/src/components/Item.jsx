import React from 'react'
import  styles from './Item.module.css'

function Item(props) {
    let {foodItem} = props; // destructing array
  return <div  className={`list-group-item ${styles['kg-item']}`}><span className={`${styles['kg-span']}`}>{foodItem}</span></div>
}

export default Item