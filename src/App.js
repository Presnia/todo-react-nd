import React from "react";
import './App.css';
import EditForm from "./edit-form/EditForm";
import TodoList from "./todo-list/TodoList";

function App() {
  return (
      <div className="App-container">
        <EditForm />
        <TodoList />
      </div>
  );
}

export default App;
