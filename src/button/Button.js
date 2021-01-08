import './Button.css';

const Button = ({ name }) => (
   <button type="button" className="act-button">
       { name }
   </button>
);

export default Button;