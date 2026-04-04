import React from 'react'

function TodoItem1() {

  let todoName = "Buy Milk";
  let todoDate = "9/11/2025";

  return (
     <div className="container ">
          <div className="row">
          <div className="col-6">{todoName}</div>
          <div className="col-4">{todoDate}</div>
          <div className="col-2 d-flex justify-content-center"><button className="btn btn-danger mybtn">Delete</button></div>

        </div>
        </div>
  )
}

export default TodoItem1