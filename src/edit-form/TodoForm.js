import React from "react";

class TodoForm extends React.Component {
    constructor(props) {
        super(props);

        this.count = 1;

        this.state = { todoDescription: "" };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ todoDescription: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        const newId = 11 + this.count++;

        const todo = {
            text: this.state.todoDescription,
            state: "in-process",
            dateCreated: Date().toString(),
            dateCompleted: null,
            id: newId ,
        };

        this.props.onCreateTodo(todo);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-row-left">
                    <input id="todo-text" type="text" placeholder="Type your plans here" name="todo-description" value={this.state.todoDescription} onChange={this.handleChange} />
                </div>
                <div className="form-row-right">
                    <input id="add-todo-button" type="submit" value="Add"/>
                    <input id="clear-form-button" type="button" value="Clear"/>
                </div>
            </form>
        );
    }
};

export default TodoForm;