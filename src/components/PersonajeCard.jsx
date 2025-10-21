import React from "react";
import { Card, Button } from "react-bootstrap";

function PersonajeCard({ personaje, agregarAlCarrito }) {
  // Precio aleatorio entre 100 y 500
  const precio = Math.floor(Math.random() * 400) + 100;

  const handleAgregar = () => {
    agregarAlCarrito({
      mal_id: personaje.mal_id,
      name: personaje.name,
      image_url: personaje.images?.jpg.image_url, // Ajuste según la API
      precio,
      cantidad: 1,
    });
  };

  return (
    <Card className="m-2" style={{ width: "12rem" }}>
      <Card.Img
        variant="top"
        src={personaje.images?.jpg.image_url}
        style={{ height: "180px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>{personaje.name}</Card.Title>
        <Card.Text>Precio: ${precio}</Card.Text>
        <Button variant="primary" onClick={handleAgregar}>
          Agregar al carrito
        </Button>
      </Card.Body>
    </Card>
  );
}

export default PersonajeCard;
