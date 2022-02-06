import './Input.scss';
import { useContext, useState } from 'react';
import TipContext from '../../context/TipContext';

const Input = ({
  inputIcon,
  type,
  inputState,
  setInputState,
  inputError,
  setInputError,
}) => {
  const tipCtx = useContext(TipContext);
  const [inputFocus, setInputFocus] = useState(false);
  const changeInputHandler = (e) => {
    setInputState(e.target.value);
    setInputError(false);
  };
  const changeButtonInput = (e) => {
    setInputError(false);
    tipCtx.setButtonInputValue(e.target.value);
    tipCtx.setTipPerecentage(e.target.value);
  };

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
          value={tipCtx.buttonInputValue}
          onChange={changeButtonInput}
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
    <div className={inputError ? 'input--error' : inputStateClassName}>
      <img className="input__icon" src={inputIcon} alt="Input icon" />
      <input
        value={inputState}
        onChange={changeInputHandler}
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
