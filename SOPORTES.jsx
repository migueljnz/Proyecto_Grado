import RoundedButton from './components/roundedButton';
import ButtonFirma from './components/ButtonFirma';
import Header from "./components/Header";
import {Row} from 'react-bootstrap';
import logo from "./assets/imagenes/1.jpg"; // Cambia la ruta al logo según tu estructura


function SOPORTES() { 
    return (
<>
        <Header 
        titulo="SOPORTES"
        logoSrc={logo}
        />
    
      <ButtonFirma texto="Despacha" textoBoton="Adjunte firma" funcion={() => console.log('it Works')}variante={"danger"}/>
      <ButtonFirma texto="Supervisor" textoBoton="Adjunte firma" funcion={() => console.log('it Works')}variante={"danger"}/>
      <ButtonFirma texto="Guarda de Seguridad" textoBoton="Adjunte firma" funcion={() => console.log('it Works')}variante={"danger"}/>
      
      <Row className="d-flex justify-content-end">
            <RoundedButton texto="Adjuntar MT" funcion={()=>console.log('it Works')} variante={"primaria"}/>
      </Row>

      <Row>
        <RoundedButton texto="Volver" funcion={()=>{}} variante={"secundaria"}/>
        <RoundedButton texto="Continuar" funcion={()=>console.log('it Works')} variante={"primaria"}/>
      </Row>
      
    </>
  );
}

  export default SOPORTES
