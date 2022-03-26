/* eslint-disable react/style-prop-object */
import Output from '../../components/Output/Output';
import './Outputs.scss';
import Button from './../../components/Button/Button';
import { useContext, useState } from 'react';
import TipContext from './../../context/TipContext';
import { verifyInputs } from '../../utils/outputFns';

const Outputs = () => {
  const [totalTip, setTotalTip] = useState({
    totalTip: 0,
    tipPerPerson: 0,
  });
  const tipCtx = useContext(TipContext);

  const calculateTip = () => {
    const inputsValid = verifyInputs(tipCtx);

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
          secondaryDescription="per person"
          description="Tip Amount"
        />
        <Output
          tip={totalTip.totalTip}
          secondaryDescription="of tip"
          description="Total"
        />
      </div>
      <div className="outputs__buttons">
        <Button clickFn={calculateTip} style="strong" content="CALCULATE" />
        <Button clickFn={resetCalculator} style="strong" content="RESET" />
      </div>
    </div>
  );
};

export default Outputs;
