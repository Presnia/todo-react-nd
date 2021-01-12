import './InfoBlock.css';
import StatePanel from "../state-panel/StatePanel";
import LabeledDateTime from "../date/LabeledDateTime";


const InfoBlock = ({ state, date }) => (
    <div className="info-block">
        <StatePanel state={ state }/>
        <LabeledDateTime label={"Created:"} dateTime={ date }/>
    </div>
);

export default InfoBlock;