import './InfoBlock.css';
import StatePanel from "../state-panel/StatePanel";
import LabeledDateTime from "../date/LabeledDateTime";


const InfoBlock = ({ state, dateCreated, dateCompleted }) => (
    <div className="info-block">
        <StatePanel state={ state }/>
        <LabeledDateTime label={"Created:"} dateTime={ dateCreated }/>
        <LabeledDateTime label={"Completed:"} dateTime={ dateCompleted }/>
    </div>
);

export default InfoBlock;