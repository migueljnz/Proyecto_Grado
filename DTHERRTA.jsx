import { useState } from 'react';
import {Form, Row} from 'react-bootstrap';
import InputLabel from './components/inputlabel';
import RoundedButton from './components/roundedButton';
import Header from "./components/Header";
import logo from "./assets/imagenes/1.jpg"; 

function DTSALIDA() {
 
  return (
    
    <>
      <Header 
      titulo="DATOS DE HERRAMIENTA"
      logoSrc={logo}/>

      <Form>
        <InputLabel nombreCampo={"Nombre "}/> 
        <InputLabel nombreCampo={"Equipment "}/> 
        <InputLabel nombreCampo={"Cantidad "}/> 
        <InputLabel nombreCampo={"Tipo de trabajo "}/> 
        <InputLabel nombreCampo={"Observaciones "}/> 
      </Form>
      <Row>
       
        <RoundedButton texto="Volver" funcion={()=>{}} variante={"secundaria"}/>
        <RoundedButton texto="Continuar" funcion={()=>console.log('it Works')} variante={"primaria"}/>
      </Row>
    </>
  )
}

export default DTSALIDA
