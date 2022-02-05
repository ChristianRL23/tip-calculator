import './Input.scss';
import { useState } from 'react';

const Input = ({ inputIcon, type }) => {
  const [inputFocus, setInputFocus] = useState(false);

  const focusInputFn = () => setInputFocus(true);

  const blurInputFn = () => setInputFocus(false);

  let inputStateClassName;
  let inputButtonStateClassName;

  if (!inputFocus) {
    inputStateClassName = 'input';
    inputButtonStateClassName = 'input--button';
  } else if (inputFocus) {
    inputStateClassName = 'input--focus';
    inputButtonStateClassName = 'input--button--focus';
  }

  if (type === 'button') {
    return (
      <div className={inputButtonStateClassName}>
        <input
          onBlur={blurInputFn}
          onFocus={focusInputFn}
          placeholder="Otro"
          type="number"
          className="input__text-area--button"
        />
      </div>
    );
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
