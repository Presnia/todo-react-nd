import FormattedDate from "./FormattedDate";

const LabeledDateTime = ({ label, dateTime }) => (
    <p className="created-date-panel">
        <dt>{ label }</dt>
        <dd><FormattedDate dateTime={dateTime}/></dd>
    </p>
);

export default LabeledDateTime;