import React from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import Header from "../components/Header";

function Carrito({ carrito, cambiarCantidad }) {
  const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  return (
    <div>
      <Header titulo="🛒 Carrito de compras" />
      <Container className="mt-4">
        {carrito.length === 0 ? (
          <p>No hay productos en el carrito.</p>
        ) : (
          <>
            {carrito.map((item) => (
              <Card className="mb-3" key={item.mal_id}>
                <Row className="g-0 align-items-center">
                  <Col md={2}>
                    <Card.Img src={item.image_url} alt={item.name} />
                  </Col>
                  <Col md={3}>
                    <Card.Body>
                      <Card.Title>{item.name}</Card.Title>
                      <Card.Text>Precio: ${item.precio}</Card.Text>
                    </Card.Body>
                  </Col>
                  <Col md={3} className="d-flex align-items-center">
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => cambiarCantidad(item.mal_id, -1)}
                    >
                      -
                    </Button>
                    <span className="mx-2">{item.cantidad}</span>
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => cambiarCantidad(item.mal_id, 1)}
                    >
                      +
                    </Button>
                  </Col>
                  <Col md={2}>
                    <Card.Body>
                      <Card.Text>Total: ${item.precio * item.cantidad}</Card.Text>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            ))}
            <h5>Total a pagar: ${total}</h5>
            <div className="mt-3">
              <Button variant="success">Finalizar compra</Button>
            </div>
          </>
        )}
      </Container>
    </div>
  );
}

export default Carrito;
