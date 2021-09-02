import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoStorage from "./todo-storage/TodoStorage";
import TodoApp from "./App";

ReactDOM.render(
    <React.StrictMode>
        <TodoApp allTodos={ TodoStorage }/>
    </React.StrictMode>,
    document.getElementById("root")
);
