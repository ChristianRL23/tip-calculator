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
        inputDescription="Total de la Cuenta"
        inputIcon={dollarIcon}
      />
      <InputsContainer container inputDescription="Seleccionar Propina %">
        <ButtonsGrid />
      </InputsContainer>
      <InputsContainer
        inputState={tipCtx.tipPercentage}
        setInputState={tipCtx.setPersons}
        inputDescription="Número de Personas"
        inputIcon={personIcon}
      />
    </div>
  );
};

export default Inputs;
