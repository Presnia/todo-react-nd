const FormattedDatePanel = ({ dateTime }) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
    const date = new Date(dateTime);
    const formattedDate = date.toLocaleString('by-BY', options);

    return formattedDate;
}

export default FormattedDatePanel;