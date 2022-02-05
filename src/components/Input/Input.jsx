import './Input.scss';
import { useState } from 'react';

const Input = ({ inputIcon }) => {
  const [inputFocus, setInputFocus] = useState(false);

  const focusInputFn = () => setInputFocus(true);

  const blurInputFn = () => setInputFocus(false);

  let inputStateClassName;

  if (!inputFocus) {
    inputStateClassName = 'input';
  } else if (inputFocus) {
    inputStateClassName = 'input--focus';
  }

  return (
    <div className={inputStateClassName}>
      <img className="input__icon" src={inputIcon} alt="Input icon" />
      <input
        onBlur={blurInputFn}
        onFocus={focusInputFn}
        placeholder="0"
        type="number"
        className="input__text-area"
      />
    </div>
  );
};

export default Input;
