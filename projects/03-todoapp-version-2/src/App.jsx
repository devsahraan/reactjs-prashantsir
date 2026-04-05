import AppName from "./components/AppName";
import "./App.css";
import TodoItems from "./components/TodoItems";

function App() {
  const todoItems = [
    {
      name: "Do Work",
      duedate: "2/12/2025",
    },
    {
      name: "Buy Grocery",
      duedate: "2/12/2025",
    },
  ];
  return (
    <center className="todo-container  ">
      <AppName></AppName>
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
