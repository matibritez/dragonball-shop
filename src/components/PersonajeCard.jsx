import React from "react";
import { Card, Button } from "react-bootstrap";

function PersonajeCard({ personaje, agregarAlCarrito }) {
  return (
    <Card className="h-100 text-center shadow-sm card-custom">
      <Card.Img
        variant="top"
        src={personaje.image}
        alt={personaje.name}
        style={{ height: "250px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>{personaje.name}</Card.Title>
        <Button variant="warning" onClick={() => agregarAlCarrito(personaje)}>
          Agregar al carrito
        </Button>
      </Card.Body>
    </Card>
  );
}

export default PersonajeCard;
