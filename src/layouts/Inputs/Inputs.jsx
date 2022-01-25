import './Inputs.scss';
import dollarIcon from './icon-dollar.svg';
import personIcon from './icon-person.svg';
import InputsContainer from '../../components/InputsContainer/InputsContainer';
import ButtonsGrid from '../ButtonsGrid/ButtonsGrid';

const Inputs = () => {
  return (
    <div className="inputs">
      <InputsContainer
        inputDescription="Total de la Cuenta"
        inputIcon={dollarIcon}
      />
      <InputsContainer container inputDescription="Seleccionar Propina %">
        <ButtonsGrid />
      </InputsContainer>
      <InputsContainer
        inputDescription="Número de Personas"
        inputIcon={personIcon}
      />
    </div>
  );
};

export default Inputs;
