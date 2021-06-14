import '../css/WrapperSuperior.css';
import Mantel from './Mantel';

const WrapperSuperior = () => {
  return (
    <div className="wrapperSuperior">
      <Mantel colorMantel="green" altMantel="140px" colorCubiertos="coral" />
      <Mantel colorMantel="coral" altMantel="180px" colorCubiertos="gray" />
      <Mantel colorMantel="purple" altMantel="100px" colorCubiertos="black" />
    </div>
  );
}

export default WrapperSuperior;