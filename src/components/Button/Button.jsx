import './Button.scss';
import './Button';

const Button = ({ content, style }) => {
  return <button className={`button--${style}`}>{content}</button>;
};

export default Button;
