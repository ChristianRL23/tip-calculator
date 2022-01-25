import './Inputs.scss';
import dollarIcon from './icon-dollar.svg';
import personIcon from './icon-person.svg';
import InputsContainer from '../../components/InputsContainer/InputsContainer';

const Inputs = () => {
  return (
    <div className="inputs">
      <InputsContainer inputDescription="Bill" inputIcon={dollarIcon} />
      <InputsContainer
        inputDescription="Number of People"
        inputIcon={personIcon}
      />
    </div>
  );
};

export default Inputs;
