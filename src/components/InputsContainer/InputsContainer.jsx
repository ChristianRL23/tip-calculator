import './InputsContainer.scss';
import Input from './../Input/Input';

const InputsContainer = ({
  inputDescription,
  inputIcon,
  container,
  children,
  inputState,
  setInputState,
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
        <Input
          inputState={inputState}
          setInputState={setInputState}
          inputIcon={inputIcon}
        />
      </div>
    );
  }
};

export default InputsContainer;
