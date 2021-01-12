import './InfoBlock.css';

const InfoBlock = ({ state }, { date }) => (
    <div className="info-block">
        <p className="status-panel">
            Task { state  }
        </p>
        <p className="created-date-panel">
            Created: { date }
        </p>
    </div>
);

export default InfoBlock;