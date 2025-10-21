import React from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import Header from "../components/Header";

function Carrito({ carrito, cambiarCantidad, finalizarCompra }) {
  const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <Header titulo="🛒 Carrito de compras" />
      <Container className="mt-4">
        {carrito.length === 0 ? (
          <p>No hay productos en el carrito.</p>
        ) : (
          <>
            {carrito.map((item) => (
              <Card className="mb-3 shadow-sm" key={item.mal_id}>
                <Row className="g-0 align-items-center">
                  <Col md={2}>
                    <Card.Img
                      src={item.image_url}
                      alt={item.name}
                      style={{ height: "80px", objectFit: "cover", borderRadius: "5px" }}
                    />
                  </Col>
                  <Col md={3}>
                    <Card.Body>
                      <Card.Title>{item.name}</Card.Title>
                      <Card.Text className="text-muted">Precio: ${item.precio}</Card.Text>
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
                    <span className="mx-2 fw-bold">{item.cantidad}</span>
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
                      <Card.Text className="fw-bold">
                        Total: ${item.precio * item.cantidad}
                      </Card.Text>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            ))}

            <h5 className="mt-3">Total a pagar: ${total}</h5>
            <div className="mt-3">
              <Button variant="success" size="lg" onClick={finalizarCompra}>
                Finalizar compra
              </Button>
            </div>
          </>
        )}
      </Container>
    </div>
  );
}

export default Carrito;
