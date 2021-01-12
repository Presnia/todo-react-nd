import React from "react";
import './App.css';
import EditForm from "./edit-form/EditForm";
import TodoPage from "./todo-page/TodoPage";

const App = ({ allTodo }) => (
    <div className="App-container">
        <EditForm />
        <TodoPage allTodo={ allTodo }/>
      </div>
);

export default App;
