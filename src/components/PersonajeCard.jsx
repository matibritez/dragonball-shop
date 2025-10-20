import React, { useState } from 'react';
import { Card, Button, Toast, ToastContainer } from 'react-bootstrap';

const PersonajeCard = ({ personaje }) => {
  const [stats] = useState({
    fuerza: Math.floor(Math.random() * 100) + 1,
    velocidad: Math.floor(Math.random() * 100) + 1,
    tecnica: Math.floor(Math.random() * 100) + 1,
  });

  const [showToast, setShowToast] = useState(false);

  const handleAgregarCarrito = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <>
      <Card className="m-2" style={{ width: '16rem' }}>
        <Card.Img
          variant="top"
          src={personaje.images?.jpg?.image_url || 'https://via.placeholder.com/150'}
          alt={personaje.name}
        />
        <Card.Body>
          <Card.Title>{personaje.name}</Card.Title>
          <Card.Text>
            <strong>Fuerza:</strong> {stats.fuerza} <br />
            <strong>Velocidad:</strong> {stats.velocidad} <br />
            <strong>Técnica:</strong> {stats.tecnica}
          </Card.Text>
          <Button variant="primary" onClick={handleAgregarCarrito}>
            Agregar al carrito
          </Button>
        </Card.Body>
      </Card>

      {/* Toast de notificación */}
      <ToastContainer position="bottom-end" className="p-3">
        <Toast show={showToast} bg="success" onClose={() => setShowToast(false)}>
          <Toast.Header>
            <strong className="me-auto">Carrito</strong>
          </Toast.Header>
          <Toast.Body>¡{personaje.name} agregado al carrito!</Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
};

export default PersonajeCard;
