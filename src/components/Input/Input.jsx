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

  const focusButtonInput = () => {
    setInputFocus(true);
    tipCtx.setButtonInputSelected(false);
  };

  const blurButtonInput = () => {
    setInputFocus(false);
    tipCtx.setButtonInputSelected(false);
    if (
      tipCtx.buttonInputValue === '5' ||
      tipCtx.buttonInputValue === '10' ||
      tipCtx.buttonInputValue === '15' ||
      tipCtx.buttonInputValue === '25' ||
      tipCtx.buttonInputValue === '50' ||
      tipCtx.buttonInputValue === '0' ||
      tipCtx.buttonInputValue === ''
    ) {
      tipCtx.setButtonInputValue('');
    } else {
      tipCtx.setButtonInputSelected(true);
    }
  };

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
      <div
        className={
          tipCtx.buttonInputSelected
            ? 'input--button--selected'
            : inputButtonStateClassName
        }
      >
        <input
          value={tipCtx.buttonInputValue}
          onChange={changeButtonInput}
          onBlur={blurButtonInput}
          onFocus={focusButtonInput}
          placeholder="Otro"
          type="number"
          className={'input__text-area--button'}
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
