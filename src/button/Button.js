import './Button.css';

const Button = ({ name }) => (
   <button type="button" className="button" >
       { name }
   </button>
);

export default Button;