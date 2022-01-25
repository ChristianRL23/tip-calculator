import Output from '../../components/Output/Output';
import './Outputs.scss';

const Outputs = () => {
  return (
    <div className="outputs">
      <div className="outputs__outputs">
        <Output description="Tip Amount" />
        <Output description="Total" />
      </div>
    </div>
  );
};

export default Outputs;
