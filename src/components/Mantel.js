import '../css/Mantel.css';
import React from 'react';
import Cubiertos from './Cubiertos';

const Mantel = (props) => {
  return (
    <div
      style={{ backgroundColor: props.colorMantel, height: props.altMantel }}
      className="mantel"
    >
      <Cubiertos colorCubiertos={props.colorCubiertos} />
      <Cubiertos colorCubiertos={props.colorCubiertos} />
    </div>
  );
};

export default Mantel;