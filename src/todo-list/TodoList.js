import React from "react";
import TodoItem from "../todo-item/TodoItem";
import './TodoList.css'

const TodoList = ({ allTodo }) =>
    <ul>
      { allTodo.map((todo) =>
          <li key={`li-${todo.id}`}>
              <TodoItem todo={todo}/>
          </li>).reverse() }
    </ul>;

export default TodoList;