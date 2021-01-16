import React from "react";
import './App.css';
import EditForm from "./edit-form/EditForm";
import TodoPage from "./todo-page/TodoPage";

class TodoApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = { todos: props.allTodo };

        this.handleCreateTodo = this.handleCreateTodo.bind(this);
    }

    handleCreateTodo(todo) {
        const newTodos = [...this.state.todos, todo];
        this.setState({ todos: newTodos });
    }

    render() {
      const {todos} = this.state;
      return (
          <div className="App-container">
              <EditForm onCreateTodo={this.handleCreateTodo} />
              <TodoPage allTodo={todos} />
          </div>
      );
  }
}

export default TodoApp;
