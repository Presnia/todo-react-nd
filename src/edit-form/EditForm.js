import './EditForm.css';

function EditForm() {
    return (
        <div className="edit-form-container">
            <h2>Create ToDO</h2>
            <div className="edit-form">
                <form>
                    <div className="form-row-left">
                        <input id="todo-text" type="text" placeholder="Type your plans here" name="todo-text"/>
                    </div>
                    <div className="form-row-right">
                        <input id="add-todo-button" type="button" value="Add"/>
                        <input id="clear-form-button" type="button" value="Clear"/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditForm;