import './TodoList.css';

function ListContainer() {
    return (
        <div className="todo-list-container">
            <h2>ToDOs of mine</h2>
            <h2>
                <span id="total-counter-text">Total Todo Count: </span>
                <span id="total-counter-number">0</span>
            </h2>
            <div className="list-filter-container">
                <a id="stat-link" href="#">Show statistics</a>
            </div>
            <div id="todo-list" className="todo-list">
                <div className="empty-list">Nothing to do</div>
            </div>
        </div>
    );
}

export default ListContainer;