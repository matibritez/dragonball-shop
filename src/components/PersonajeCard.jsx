import React from "react";
import { Card, Button } from "react-bootstrap";

function PersonajeCard({ personaje, agregarAlCarrito }) {
  // Generamos un precio aleatorio entre 100 y 500
  const precio = Math.floor(Math.random() * 400) + 100;

  const handleAgregar = () => {
    agregarAlCarrito({ ...personaje, precio, cantidad: 1 });
  };

  return (
    <Card className="m-2" style={{ width: "15rem" }}>
      <Card.Img variant="top" src={personaje.images.jpg.image_url} />
      <Card.Body>
        <Card.Title>{personaje.name}</Card.Title>
        <Card.Text>
          Fuerza: {Math.floor(Math.random() * 100)} <br />
          Velocidad: {Math.floor(Math.random() * 100)} <br />
          Técnica: {Math.floor(Math.random() * 100)} <br />
          <strong>Precio: ${precio}</strong>
        </Card.Text>
        <Button onClick={handleAgregar} variant="primary">Agregar al carrito</Button>
      </Card.Body>
    </Card>
  );
}

export default PersonajeCard;
