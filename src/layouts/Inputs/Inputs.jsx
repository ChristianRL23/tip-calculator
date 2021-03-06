import './Inputs.scss';
import dollarIcon from './icon-dollar.svg';
import personIcon from './icon-person.svg';
import InputsContainer from '../../components/InputsContainer/InputsContainer';
import ButtonsGrid from '../ButtonsGrid/ButtonsGrid';
import { useContext } from 'react';
import TipContext from '../../context/TipContext';

const Inputs = () => {
  const tipCtx = useContext(TipContext);

  return (
    <div className="inputs">
      <InputsContainer
        inputState={tipCtx.billTotal}
        setInputState={tipCtx.setBillTotal}
        inputDescription="Bill"
        inputIcon={dollarIcon}
        inputError={tipCtx.billInputError}
        setInputError={tipCtx.setBillInputError}
      />
      <InputsContainer
        container
        inputError={tipCtx.tipInputError}
        setInputError={tipCtx.setTipInputError}
        inputDescription="Select Tip %"
      >
        <ButtonsGrid
          inputError={tipCtx.tipInputError}
          setInputError={tipCtx.setTipInputError}
        />
      </InputsContainer>
      <InputsContainer
        inputState={tipCtx.persons}
        setInputState={tipCtx.setPersons}
        inputError={tipCtx.personsInputError}
        setInputError={tipCtx.setPersonsInputError}
        inputDescription="Number of people"
        inputIcon={personIcon}
      />
    </div>
  );
};

export default Inputs;
