const StatePanel = ({ state }) => {
    const labels = {
        done: "I did it!!!",
        "in-process": "I care about it right now ;)",
        postponed: "I don't care about it right now",
    };
    return (
        <p className="status-panel">
            <dt>Status:</dt>
            <dd>{labels[state]}</dd>
        </p>
    );
};

export default StatePanel;