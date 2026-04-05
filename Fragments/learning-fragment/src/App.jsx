import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import FoodItem from './components/FoodItem'
import ErrorMessage from './components/ErrorMessage'

function App() {

  // let foodItems = [];
  let foodItems = ['Biryani','Chicken','Roll','Bread','Karahi']

  // if(foodItems.length === 0){
  //   return <h3>I am still hungry</h3>
  // }

  return <React.Fragment>

    <h1>Healthy Foods</h1>
    {/* {foodItems.length === 0 ? <h3>I am still hungry</h3> : null}  */}
    <ErrorMessage foodItems={foodItems}></ErrorMessage>
    <FoodItem foodItems={foodItems}></FoodItem>
  </React.Fragment>
  
  
}

export default App
