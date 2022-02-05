import React, { useState } from 'react';

const TipContext = React.createContext({
  billTotal: 0,
  setBillTotal: () => {},
  tipPercentage: 0,
  setTipPerecentage: () => {},
  persons: 0,
  setPersons: () => {},
});

export const TipContextProvider = ({ children }) => {
  const [billTotal, setBillTotal] = useState(0);
  const [tipPercentage, setTipPerecentage] = useState(0);
  const [persons, setPersons] = useState(0);

  return (
    <TipContext.Provider
      value={{
        billTotal,
        setBillTotal,
        tipPercentage,
        setTipPerecentage,
        persons,
        setPersons,
      }}
    >
      {children}
    </TipContext.Provider>
  );
};

export default TipContext;
