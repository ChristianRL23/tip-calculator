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
});

export const TipContextProvider = ({ children }) => {
  const [billTotal, setBillTotal] = useState(undefined);
  const [tipPercentage, setTipPerecentage] = useState(undefined);
  const [persons, setPersons] = useState(undefined);
  const [buttonInputValue, setButtonInputValue] = useState(undefined);

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
      }}
    >
      {children}
    </TipContext.Provider>
  );
};

export default TipContext;
