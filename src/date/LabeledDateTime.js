import FormattedDate from "./FormattedDate";

const LabeledDateTime = ({ label, dateTime }) => dateTime === null ? null : (
    <p className="created-date-panel">
        <dt>{ label }</dt>
        <dd><FormattedDate dateTime={dateTime}/></dd>
    </p>
);

export default LabeledDateTime;