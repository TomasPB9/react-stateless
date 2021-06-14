import '../css/WrapperInferior.css';
import Mantel from './Mantel';

const WrapperInferior = () => {
  return (
    <div className="wrapperInferior">
      <Mantel colorMantel="coral" altMantel="100px" colorCubiertos="gray" />
      <Mantel colorMantel="coral" altMantel="100px" colorCubiertos="gray" />
    </div>
  );
}

export default WrapperInferior;