import './Inputs.scss';
import dollarIcon from './icon-dollar.svg';
import personIcon from './icon-person.svg';
import InputsContainer from '../../components/InputsContainer/InputsContainer';
import ButtonsGrid from '../ButtonsGrid/ButtonsGrid';

const Inputs = () => {
  return (
    <div className="inputs">
      <InputsContainer inputDescription="Bill" inputIcon={dollarIcon} />
      <InputsContainer container inputDescription="Select Tip %">
        <ButtonsGrid />
      </InputsContainer>
      <InputsContainer
        inputDescription="Number of People"
        inputIcon={personIcon}
      />
    </div>
  );
};

export default Inputs;
