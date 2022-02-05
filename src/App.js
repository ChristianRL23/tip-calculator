import './App.scss';
import Inputs from './layouts/Inputs/Inputs';
import { TipContextProvider } from './context/TipContext';
import Container from './layouts/Container/Container';
import Outputs from './layouts/Outputs/Outputs';

const App = () => {
  return (
    <Container>
      <TipContextProvider>
        <Inputs />
        <Outputs />
      </TipContextProvider>
    </Container>
  );
};

export default App;
