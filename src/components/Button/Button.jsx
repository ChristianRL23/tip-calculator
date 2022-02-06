import './Button.scss';
import './Button';
import { useContext } from 'react';
import TipContext from '../../context/TipContext';

const Button = ({ content, style, clickFn }) => {
  const tipCtx = useContext(TipContext);

  return (
    <button
      onClick={clickFn}
      className={
        tipCtx.tipPercentage === content.slice(0, -1)
          ? 'button--selected'
          : `button--${style}`
      }
    >
      {content}
    </button>
  );
};

export default Button;
