import React from "react";
import './App.css';
import EditForm from "./edit-form/EditForm";
import TodoPage from "./todo-page/TodoPage";
import TodoForm from "./edit-form/TodoForm";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { todos: props.allTodo };

        this.handleCreateTodo = this.handleCreateTodo.bind(this);
    }

    handleCreateTodo(todo) {
        const newTodos = [...this.state.todos, todo];
        this.setState({ todos: newTodos });
        // console.log(`Handle create todo ${todo}`)
    }

    render() {
      const {todos} = this.state;
      return (
          <div className="App-container">
              <EditForm>
                  <TodoForm onCreateTodo={this.handleCreateTodo} />
              </EditForm>
              <TodoPage allTodo={todos} />
          </div>
      );
  }
}

export default App;
