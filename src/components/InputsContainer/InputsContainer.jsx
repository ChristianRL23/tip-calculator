import './InputsContainer.scss';
import Input from './../Input/Input';

const InputsContainer = ({
  inputDescription,
  inputIcon,
  container,
  children,
}) => {
  if (container) {
    return (
      <div className="inputs-container">
        <h6 className="inputs-container__description">{inputDescription}</h6>
        {children}
      </div>
    );
  } else {
    return (
      <div className="inputs-container">
        <h6 className="inputs-container__description">{inputDescription}</h6>
        <Input inputIcon={inputIcon} />
      </div>
    );
  }
};

export default InputsContainer;
