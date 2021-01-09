import './InfoBlock.css';

const InfoBlock = ({ state }, { dateCreated }) => (
    <div className="info-block">
        <p className="status-panel">
            Task { state }
        </p>
        <p className="created-date-panel">
            Created: { dateCreated }
        </p>
    </div>
);

export default InfoBlock;