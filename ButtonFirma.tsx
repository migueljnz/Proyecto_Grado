import React from 'react';

const ButtonFirma = ({ textoBoton, texto, funcion, variante }) => {
  return (
    <div className="d-flex justify-content-center mb-4">
      <span className="me-3">{texto}</span> 
      <button
        className={`btn btn-${variante} rounded`}  
        onClick={funcion}
      >
        {textoBoton}
      </button>
    </div>
  );
};

export default ButtonFirma;
