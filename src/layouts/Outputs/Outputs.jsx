/* eslint-disable react/style-prop-object */
import Output from '../../components/Output/Output';
import './Outputs.scss';
import Button from './../../components/Button/Button';
import { useContext } from 'react';
import TipContext from './../../context/TipContext';

const Outputs = () => {
  const tipCtx = useContext(TipContext);
  const calculateTip = () => {
    if (tipCtx.billTotal === '') {
      tipCtx.setBillInputError('No puede estar vacío.');
    } else if (tipCtx.billTotal <= 0) {
      tipCtx.setBillInputError('Debe ser mayor a cero.');
    }
    if (tipCtx.tipPercentage === '') {
      tipCtx.setTipInputError('No puede estar vacío.');
    } else if (tipCtx.tipPercentage <= 0) {
      tipCtx.setTipInputError('Debe ser mayor a cero.');
    }
    if (tipCtx.persons === '') {
      tipCtx.setPersonsInputError('No puede estar vacío.');
    } else if (tipCtx.persons <= 0) {
      tipCtx.setPersonsInputError('Debe ser mayor a cero.');
    }
  };

  return (
    <div className="outputs">
      <div className="outputs__outputs">
        <Output description="Propina" />
        <Output description="Total" />
      </div>
      <div className="outputs__buttons">
        <Button clickFn={calculateTip} style="strong" content="CALCULAR" />
        <Button style="strong" content="RESTABLECER" />
      </div>
    </div>
  );
};

export default Outputs;
