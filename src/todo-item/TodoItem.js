import './TodoItem.css';
import Text from "../text/Text";
import InfoBlock from "../info-block/InfoBlock";
import ControlBlock from "../control-block/ControlBlock";

const TodoItem = () => (
    <div className="item">
            <Text text="Some text"/>
        <InfoBlock TodoState="Task in progress" />
        <ControlBlock />
    </div>
);

export default TodoItem;