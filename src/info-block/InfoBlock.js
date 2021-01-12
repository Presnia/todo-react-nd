import './InfoBlock.css';

const InfoBlock = ({ todo }) => (
    <div className="info-block">
        <p className="status-panel">
            Task
        </p>
        <p className="created-date-panel">
            Created:
        </p>
    </div>
);

export default InfoBlock;