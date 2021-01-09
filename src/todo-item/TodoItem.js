import './TodoItem.css';
import Text from "../text/Text";
import InfoBlock from "../info-block/InfoBlock";
import ControlBlock from "../control-block/ControlBlock";
import TodoStorage from "../todo-storage/TodoStorage";



const TodoItem = ({ state }, { text }) => (
    <div className="item">
        <Text text="Some text (for example)"/>
        <InfoBlock state={ state } />
        <ControlBlock />
    </div>
);

export default TodoItem;