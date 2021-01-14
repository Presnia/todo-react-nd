import './EditForm.css';
import TodoForm from "../todo-form/TodoForm";
import React from "react";

function EditForm(props) {
    return (
        <div className="edit-form-container">
            <h2>Create ToDO</h2>
            <div className="edit-form">
                <TodoForm onCreateTodo={props.onCreateTodo} />
            </div>
        </div>
    );
};

export default EditForm;