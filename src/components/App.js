import '../css/index.css';
import WrapperSuperior from './WrapperSuperior';
import WrapperIntermedio from './WrapperIntermedio';
import WrapperInferior from './WrapperInferior';

function App() {
  return (
    <div className="App">
      <WrapperSuperior />
      <WrapperIntermedio />
      <WrapperInferior />
    </div>
  );
}

export default App;
