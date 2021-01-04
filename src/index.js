import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./EditFormContainer.css";
import "./TodoListContainer.css"
import App from "./App";
import EditForm from "./EditFormContainer";
import ListContainer from "./TodoListContainer";

const todo = (
  <React.StrictMode>
      <React.Fragment>
          <App />
          <EditForm />
          <ListContainer />
      </React.Fragment>
  </React.StrictMode>
);

ReactDOM.render(todo, document.getElementById("root"));
