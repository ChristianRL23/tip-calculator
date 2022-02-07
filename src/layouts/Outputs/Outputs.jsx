/* eslint-disable react/style-prop-object */
import Output from '../../components/Output/Output';
import './Outputs.scss';
import Button from './../../components/Button/Button';
import { useContext, useState } from 'react';
import TipContext from './../../context/TipContext';

const Outputs = () => {
  const [totalTip, setTotalTip] = useState({
    totalTip: 0,
    tipPerPerson: 0,
  });

  let inputsValid;
  const tipCtx = useContext(TipContext);

  const calculateTip = () => {
    if (tipCtx.billTotal === '') {
      tipCtx.setBillInputError('No puede estar vacío');
      inputsValid = false;
    } else if (tipCtx.billTotal <= 0) {
      tipCtx.setBillInputError('Debe ser mayor a cero');
      inputsValid = false;
    }
    if (tipCtx.tipPercentage === '') {
      tipCtx.setTipInputError('No puede estar vacío');
      inputsValid = false;
    } else if (tipCtx.tipPercentage <= 0) {
      tipCtx.setTipInputError('Debe ser mayor a cero');
      inputsValid = false;
    } else if (tipCtx.tipPercentage > 100) {
      tipCtx.setTipInputError('Debe ser menor a cien');
      inputsValid = false;
    }
    if (tipCtx.persons === '') {
      tipCtx.setPersonsInputError('No puede estar vacío');
      inputsValid = false;
    } else if (tipCtx.persons <= 0) {
      tipCtx.setPersonsInputError('Debe ser mayor a cero');
      inputsValid = false;
    }

    if (inputsValid === undefined) {
      const totalTip =
        (Number(tipCtx.tipPercentage) * Number(tipCtx.billTotal)) / 100;
      const tipPerPerson = totalTip / Number(tipCtx.persons);
      setTotalTip({
        totalTip,
        tipPerPerson,
      });
    }
  };

  const resetCalculator = () => {
    tipCtx.setBillTotal('');
    tipCtx.setTipPerecentage('');
    tipCtx.setPersons('');
    tipCtx.setButtonInputSelected(false);
    tipCtx.setButtonInputValue('');
    setTotalTip({
      totalTip: 0,
      tipPerPerson: 0,
    });
    tipCtx.setBillInputError('');
    tipCtx.setTipInputError('');
    tipCtx.setPersonsInputError('');
  };

  return (
    <div className="outputs">
      <div className="outputs__outputs">
        <Output
          tip={totalTip.tipPerPerson}
          secondaryDescription="por persona"
          description="Propina"
        />
        <Output
          tip={totalTip.totalTip}
          secondaryDescription="de propina"
          description="Total"
        />
      </div>
      <div className="outputs__buttons">
        <Button clickFn={calculateTip} style="strong" content="CALCULAR" />
        <Button
          clickFn={resetCalculator}
          style="strong"
          content="RESTABLECER"
        />
      </div>
    </div>
  );
};

export default Outputs;
