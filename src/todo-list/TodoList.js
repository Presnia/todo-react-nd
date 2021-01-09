import React from 'react';
import './TodoList.css';
import TodoItem from '../todo-item/TodoItem';
import ListFilter from "../list-filter/ListFilter";
import TodoStorage from "../todo-storage/TodoStorage";

const AllTodo = TodoStorage.map(() => (<TodoItem />));

function TodoList() {
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
            </div>

            <div id="todo-list" className="todo-list">
                { AllTodo }
            </div>
        </div>
    );
}

export default TodoList;