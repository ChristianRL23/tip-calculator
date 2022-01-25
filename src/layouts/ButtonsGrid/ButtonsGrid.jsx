import Button from '../../components/Button/Button';
import './ButtonsGrid.scss';

const ButtonsGrid = () => {
  return (
    <div className="buttons-grid">
      <Button style="dark" content="5%" />
      <Button style="dark" content="10%" />
      <Button style="dark" content="15%" />
      <Button style="dark" content="25%" />
      <Button style="dark" content="50%" />
      <Button style="light" content="Custom" />
    </div>
  );
};

export default ButtonsGrid;
