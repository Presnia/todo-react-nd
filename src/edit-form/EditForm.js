import './EditForm.css';
import TodoForm from "./TodoForm";
import React from "react";

function EditForm() {
    return (
        <div className="edit-form-container">
            <h2>Create ToDO</h2>
            <div className="edit-form">
                <TodoForm />
            </div>
        </div>
    );
};

export default EditForm;