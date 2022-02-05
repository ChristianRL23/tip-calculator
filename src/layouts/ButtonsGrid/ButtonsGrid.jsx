/* eslint-disable react/style-prop-object */
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import './ButtonsGrid.scss';

const ButtonsGrid = () => {
  return (
    <div className="buttons-grid">
      <Button style="dark" content="5%" />
      <Button style="dark" content="10%" />
      <Button style="dark" content="15%" />
      <Button style="dark" content="25%" />
      <Button style="dark" content="50%" />
      <Input type="button" />
    </div>
  );
};

export default ButtonsGrid;
