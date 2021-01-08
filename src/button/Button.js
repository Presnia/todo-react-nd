import './Button.css';

const Button = ({ name },{ ClassName }) => (
   <button type="button" className="button">
       { name }
   </button>
);

export default Button;