export const verifyInputs = (tipCtx) => {
  let inputsValid;

  //BILL
  if (tipCtx.billTotal === '') {
    tipCtx.setBillInputError(`Can't be empty`);
    inputsValid = false;
  } else if (tipCtx.billTotal <= 0) {
    tipCtx.setBillInputError(`Must be greater than zero`);
    inputsValid = false;
  }
  //TIP PERCENTAGE
  if (tipCtx.tipPercentage === '') {
    tipCtx.setTipInputError(`Can't be empty`);
    inputsValid = false;
  } else if (tipCtx.tipPercentage <= 0) {
    tipCtx.setTipInputError(`Must be greater than zero`);
    inputsValid = false;
  } else if (tipCtx.tipPercentage > 100) {
    tipCtx.setTipInputError('Must be less than one hundred');
    inputsValid = false;
  }
  //PERSONS
  if (tipCtx.persons === '') {
    tipCtx.setPersonsInputError(`Can't be empty`);
    inputsValid = false;
  } else if (tipCtx.persons <= 0) {
    tipCtx.setPersonsInputError(`Must be greater than zero`);
    inputsValid = false;
  }

  return inputsValid;
};
