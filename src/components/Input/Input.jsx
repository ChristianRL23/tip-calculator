import './Input.scss';

const Input = ({ inputIcon }) => {
  return (
    <div className="input">
      <img className="input__icon" src={inputIcon} alt="Input icon" />
      <input type="number" className="input__text-area" />
    </div>
  );
};

export default Input;
