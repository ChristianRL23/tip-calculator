import './Button.scss';
import './Button';

const Button = ({ content, style, clickFn }) => {
  return (
    <button onClick={clickFn} className={`button--${style}`}>
      {content}
    </button>
  );
};

export default Button;
