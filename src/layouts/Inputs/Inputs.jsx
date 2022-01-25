import Input from '../../components/Input/Input';
import './Inputs.scss';
import dollarIcon from './icon-dollar.svg';

const Inputs = () => {
  return (
    <div className="inputs">
      <Input icon={dollarIcon} />
    </div>
  );
};

export default Inputs;
