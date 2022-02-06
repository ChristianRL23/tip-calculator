/* eslint-disable react/style-prop-object */
import { useContext } from 'react';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import './ButtonsGrid.scss';
import TipContext from './../../context/TipContext';

const ButtonsGrid = ({ inputError, setInputError }) => {
  const tipCtx = useContext(TipContext);

  const clickButtonFn = (e) => {
    tipCtx.setTipPerecentage(e.target.innerHTML.slice(0, -1));
    tipCtx.setButtonInputValue('');
    tipCtx.setButtonInputSelected(false);
  };

  return (
    <div className="buttons-grid">
      <Button clickFn={clickButtonFn} style="dark" content="5%" />
      <Button clickFn={clickButtonFn} style="dark" content="10%" />
      <Button clickFn={clickButtonFn} style="dark" content="15%" />
      <Button clickFn={clickButtonFn} style="dark" content="25%" />
      <Button clickFn={clickButtonFn} style="dark" content="50%" />
      <Input
        inputError={inputError}
        setInputError={setInputError}
        inputState={tipCtx.tipPercentage}
        setInputState={tipCtx.setTipPerecentage}
        type="button"
      />
    </div>
  );
};

export default ButtonsGrid;
