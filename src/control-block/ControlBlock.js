import './ControlBlock.css';
import Button from "../button/Button";

const ControlBlock = () => (
    <div className="control-block">
        <Button name="View" className="view-button" />
        <Button name="Postpone" className="postpone-button" />
        <Button name="Done" className="done-button" />
        <Button name="Delete" className="delete-button" />
    </div>
);

export default ControlBlock;