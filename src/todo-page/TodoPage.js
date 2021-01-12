import React from 'react';
import './TodoPage.css';
import TodoList from "../todo-list/TodoList";
import ListFilter from "../list-filter/ListFilter";

function TodoPage({ allTodo }) {
    return (
        <div className="todo-list-container">
            <h2>ToDOs of mine</h2>
            <h2>
                <span id="total-counter-text">Total Todo Count: </span>
                <span id="total-counter-number">0</span>
            </h2>

            <ListFilter />

            <div className="todo-list">
                <div className="empty-list">Nothing to do</div>
                <TodoList allTodo={ allTodo }/>
            </div>
        </div>
    );
}

export default TodoPage;