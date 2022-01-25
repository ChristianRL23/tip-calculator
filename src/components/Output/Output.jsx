import './Output.scss';

const Output = ({ description }) => {
  return (
    <div className="output">
      <div className="output__description">
        <h5 className="output__description__main">{description}</h5>
        <h6 className="output__description__secondary">/ person</h6>
      </div>
      <h2 className="output__value">$00.00</h2>
    </div>
  );
};

export default Output;
