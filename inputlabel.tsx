import React from 'react';
import {Col, Form, Row} from 'react-bootstrap'

interface IInputLabelProps {
    nombreCampo : string;
}

const InputLabel: React.FC<IInputLabelProps> = ({ nombreCampo }) => {
    return (
        <Row className="my-3">
          <Col md={1} className="d-flex align-items-center mx-5">
            <Form.Label>{nombreCampo}</Form.Label>
          </Col>
          <Col md={4}>
            <Form.Control
                type="text" 
                placeholder="Escriba algo..." 
                name="exampleInput" 
                required 
                className="is-invalid"
              />
                <Form.Control.Feedback type="invalid">
                 Este campo es obligatorio.
               </Form.Control.Feedback>
          </Col>  
        </Row>
    );
  };

export default InputLabel;
