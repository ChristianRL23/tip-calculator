import Button from '../../components/Button/Button';
import './ButtonsGrid.scss';

const ButtonsGrid = () => {
  return (
    <div className="buttons-grid">
      <Button content="5%" />
      <Button content="10%" />
      <Button content="15%" />
      <Button content="25%" />
      <Button content="50%" />
      <Button content="Custom" />
    </div>
  );
};

export default ButtonsGrid;
