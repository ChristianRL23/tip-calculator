import './InputsContainer.scss';
import Input from './../Input/Input';

const InputsContainer = ({
  inputDescription,
  inputIcon,
  container,
  children,
  inputState,
  setInputState,
  inputError,
  setInputError,
}) => {
  return (
    <div className="inputs-container">
      <div className="inputs-container__texts">
        <h6 className="inputs-container__texts__description">
          {inputDescription}
        </h6>
        {inputError && (
          <p className="inputs-container__texts__error-message">{inputError}</p>
        )}
      </div>
      {container ? (
        children
      ) : (
        <Input
          inputError={inputError}
          setInputError={setInputError}
          inputState={inputState}
          setInputState={setInputState}
          inputIcon={inputIcon}
        />
      )}
    </div>
  );
};

export default InputsContainer;
