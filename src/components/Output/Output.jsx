import './Output.scss';

const Output = ({ description, tip, secondaryDescription }) => {
  return (
    <div className="output">
      <div className="output__description">
        <h5 className="output__description__main">{description}</h5>
        <h6 className="output__description__secondary">
          {secondaryDescription}
        </h6>
      </div>
      <h2 className="output__value">{`$${tip.toFixed(2)}`}</h2>
    </div>
  );
};

export default Output;
