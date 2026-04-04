import React from 'react'

function TodoItem2() {

  let todoName = "Buy Car";
  let todoDate = "10/2/2022";

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

export default TodoItem2