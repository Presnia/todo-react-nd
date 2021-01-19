import React, { useState } from "react";
import './App.css';
import EditForm from "./edit-form/EditForm";
import TodoPage from "./todo-page/TodoPage";

const TodoApp = (props) => {
  const [allTodo, setAllTodo] = useState(props.allTodo);

  const handleCreateTodo = (todo) => {
    const newTodo = [...allTodo, todo];
    setAllTodo(newTodo);
  };

  return (
    <div className="App-container">
      <EditForm onCreateTodo={handleCreateTodo} />
      <TodoPage allTodo={allTodo} />
    </div>
  );
}

export default TodoApp;
