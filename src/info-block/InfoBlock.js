import './InfoBlock.css';

const InfoBlock = ({ TodoState }) => (
    <div className="info-block">
        <p className="status-panel">
            { TodoState }
        </p>
        <p className="created-date-panel">
           Created: 08.01.2020, 20:24
        </p>
    </div>
);

export default InfoBlock;