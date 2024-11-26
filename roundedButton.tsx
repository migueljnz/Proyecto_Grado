import React from 'react';
import { Button, Col } from 'react-bootstrap';

interface IRoundedButtonProps {
  texto: string;
  variante: string;
  funcion: () => void;
}

const RoundedButton = ({ texto, funcion, variante }: IRoundedButtonProps) => {
  const buttonVariant = variante === 'primaria' ? 'danger' : 'secondary';

  return (
    <Col className="d-flex justify-content-center align-items-center mb-3">
      <Button
        onClick={funcion}
        variant={buttonVariant}
        className="rounded"
      >
        {texto}
      </Button>
    </Col>
  );
};

export default RoundedButton;
