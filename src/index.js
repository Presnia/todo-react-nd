import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import TodoStorage from "./todo-storage/TodoStorage";

ReactDOM.render(
    <React.StrictMode>
        <App allTodo={ TodoStorage }/>
    </React.StrictMode>,
    document.getElementById("root")
);
