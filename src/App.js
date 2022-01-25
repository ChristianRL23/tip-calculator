import './App.scss';
import Inputs from './layouts/Inputs/Inputs';

import Container from './layouts/Container/Container';
import Outputs from './layouts/Outputs/Outputs';

const App = () => {
  return (
    <Container>
      <Inputs />
      <Outputs />
    </Container>
  );
};

export default App;
