import './Input.scss';

const Input = ({ icon }) => {
  return (
    <div className="input">
      <img className="input__icon" src={icon} alt="Input icon" />
      <input type="number" className="input__text-area" />
    </div>
  );
};

export default Input;
