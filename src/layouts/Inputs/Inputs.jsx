import './Inputs.scss';
import dollarIcon from './icon-dollar.svg';
import InputsContainer from '../../components/InputsContainer/InputsContainer';

const Inputs = () => {
  return (
    <div className="inputs">
      <InputsContainer inputDescription="Bill" inputIcon={dollarIcon} />
    </div>
  );
};

export default Inputs;
