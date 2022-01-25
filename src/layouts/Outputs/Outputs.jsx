/* eslint-disable react/style-prop-object */
import Output from '../../components/Output/Output';
import './Outputs.scss';
import Button from './../../components/Button/Button';

const Outputs = () => {
  return (
    <div className="outputs">
      <div className="outputs__outputs">
        <Output description="Tip Amount" />
        <Output description="Total" />
      </div>
      <div className="outputs__buttons">
        <Button style="strong" content="CALCULAR" />
        <Button style="strong" content="RESTABLECER" />
      </div>
    </div>
  );
};

export default Outputs;
