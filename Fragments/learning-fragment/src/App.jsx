import React, { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import FoodItem from './components/FoodItem'
import ErrorMessage from './components/ErrorMessage'
import Container from './components/Container'
import FoodInput from './components/FoodInput'

function App() {

  // let foodItems = [];
  let [foodItems,setFoodItems] = useState(['Biryani','Chicken','Roll','Bread','Karahi']);


  // let textStateArr = useState("Food item entered by user");
  // let textToShow = textStateArr[0];
  // let setTextState = textStateArr[1];

  // let[textToShow , setTextState] = useState();

  // if(foodItems.length === 0){
  //   return <h3>I am still hungry</h3>
  // }

  const OnKeyDown = (event) => {
    if(event.key == "Enter"){
      let newFoodItem = event.target.value;
      let newItems = [...foodItems,newFoodItem];
      setFoodItems(newItems);
      console.log("Food Value Entered By User is = " + newFoodItem);
    }
    // console.log(event.target.value);
    // textToShow = event.target.value;
    // setTextState(event.target.value);
  };

  return <React.Fragment>
    <Container>

    <h1 className='food-heading'>Healthy Foods</h1>
    {/* {foodItems.length === 0 ? <h3>I am still hungry</h3> : null}  */}
    <ErrorMessage foodItems={foodItems}></ErrorMessage>
    <FoodInput handleOnKeyDown={OnKeyDown}></FoodInput>
    {/* <p>{textToShow}</p> */}
    <FoodItem foodItems={foodItems}></FoodItem>
    </Container>

    {/* <Container>
      <p>Hello</p>
    </Container> */}
  </React.Fragment>
  
  
}

export default App
