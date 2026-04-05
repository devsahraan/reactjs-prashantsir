import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo"
import styles from "./TodoItems.module.css"

const TodoItems = ({todoItems}) =>{
    return <>
        <div className={`${styles['items-container']}  d-flex flex-column gap-3`}>
        <AddTodo></AddTodo>
        {
            todoItems.map((item)=> <TodoItem key={item.name} todoName={item.name} todoDate={item.duedate}></TodoItem>)
        }
        
    
      </div>
    </>
}

export default TodoItems;