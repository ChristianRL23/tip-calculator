import React, { useState } from 'react';

const TipContext = React.createContext({
  billTotal: 0,
  setBillTotal: () => {},
  tipPercentage: 0,
  setTipPerecentage: () => {},
  persons: 0,
  setPersons: () => {},
  buttonInputValue: 0,
  setButtonInputValue: () => {},
  inputsError: {},
  setInputsError: () => {},
  billInputError: '',
  setBillInputError: () => {},
  tipInputError: '',
  setTipInputError: () => {},
  personsInputError: '',
  setPersonsInputError: () => {},
});

export const TipContextProvider = ({ children }) => {
  const [billTotal, setBillTotal] = useState('');
  const [tipPercentage, setTipPerecentage] = useState('');
  const [persons, setPersons] = useState('');
  const [buttonInputValue, setButtonInputValue] = useState('');
  const [billInputError, setBillInputError] = useState('');
  const [tipInputError, setTipInputError] = useState('');
  const [personsInputError, setPersonsInputError] = useState('');

  return (
    <TipContext.Provider
      value={{
        billTotal,
        setBillTotal,
        tipPercentage,
        setTipPerecentage,
        persons,
        setPersons,
        buttonInputValue,
        setButtonInputValue,
        billInputError,
        setBillInputError,
        tipInputError,
        setTipInputError,
        personsInputError,
        setPersonsInputError,
      }}
    >
      {children}
    </TipContext.Provider>
  );
};

export default TipContext;
