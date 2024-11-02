import { useState } from "react";
import "./App.css";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";

let App = () => {
  let [todos, setTodos] = useState([]);
  let [todo, setTodo] = useState("");

  let addTodo = () => {
    if (todo !== "") {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };

  let deleteTodo = (text) => {
    let newTodos = todos.filter((todo) => {
      return todo !== text;
    });
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoInput todo={todo} setTodo={setTodo} addTodo={addTodo} />
      <TodoList list={todos} remove={deleteTodo} />
    </div>
  );
};

export default App;
