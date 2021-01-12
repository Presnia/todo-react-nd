import './TodoItem.css';
import Text from "../text/Text";
import InfoBlock from "../info-block/InfoBlock";
import ControlBlock from "../control-block/ControlBlock";

const TodoItem = ({ todo }) => (
    <div className="item" key={todo.id}>
        <Text text={ todo.text }/>
        <InfoBlock state={ todo.state } dateCreated={ todo.dateCreated } dateCompleted={ todo.dateCompleted }/>
        <ControlBlock />
    </div>
);

export default TodoItem;