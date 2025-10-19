import React from "react";
import { Spinner, Container } from "react-bootstrap";

function SpinnerCarga() {
  return (
    <Container className="text-center mt-5">
      <Spinner animation="border" variant="warning" />
      <p className="mt-2">Cargando personajes...</p>
    </Container>
  );
}

export default SpinnerCarga;
