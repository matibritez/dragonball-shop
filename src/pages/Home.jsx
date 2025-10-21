import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Spinner, Alert, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home({ agregarAlCarrito }) {
  const [personajes, setPersonajes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPersonajes = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://api.jikan.moe/v4/anime/813/characters");
        if (!res.ok) throw new Error("Error en la API");
        const data = await res.json();
        setPersonajes(data.data.slice(0, 3)); // los 3 personajes destacados
      } catch (err) {
        console.error(err);
        setError("No se pudieron cargar los personajes");
      } finally {
        setLoading(false);
      }
    };
    fetchPersonajes();
  }, []);

  return (
    <div>
      {/* Hero / Banner */}
      <div
  style={{
    backgroundImage: "url('https://wallpapercat.com/images/dragon-ball-z-wallpapers-4k.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "60vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
  }}
>
  <h1 className="mb-3">Bienvenido a Dragon Ball Shop</h1>
  <p className="mb-4">Tus personajes y productos favoritos de Dragon Ball</p>
  <Button as={Link} to="/personajes" variant="warning" size="lg">
    Ver Personajes
  </Button>
</div>

      {/* Sección de beneficios */}
      <Container className="mt-5">
        <Row className="text-center">
          <Col md={4} className="mb-4">
            <Card className="h-100">
              <Card.Body>
                <Card.Title>Envío rápido</Card.Title>
                <Card.Text>Recibe tus productos favoritos en tiempo récord.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="h-100">
              <Card.Body>
                <Card.Title>Productos oficiales</Card.Title>
                <Card.Text>Todos nuestros artículos son originales y de calidad.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="h-100">
              <Card.Body>
                <Card.Title>Soporte 24/7</Card.Title>
                <Card.Text>Estamos disponibles para cualquier consulta o ayuda.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Sección de personajes destacados desde API */}
      <Container className="mt-5">
        <h2 className="mb-4 text-center">Personajes Destacados</h2>
        {loading ? (
          <div className="d-flex justify-content-center mt-5">
            <Spinner animation="border" />
          </div>
        ) : error ? (
          <Alert variant="danger">{error}</Alert>
        ) : (
          <Row className="d-flex flex-wrap justify-content-center">
            {personajes.map((p) => (
              <Col md={3} className="mb-4" key={p.character.mal_id}>
                <Card>
                  <Card.Img
                    variant="top"
                    src={p.character.images.jpg.image_url}
                    alt={p.character.name}
                    style={{ height: "250px", objectFit: "cover" }}
                  />
                  <Card.Body>
                    <Card.Title>{p.character.name}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>

      {/* Llamado a la acción */}
      <Container className="text-center my-5">
        <h3>¿Listo para conseguir tus personajes favoritos?</h3>
        <Button as={Link} to="/personajes" variant="success" size="lg">
          Comprar ahora
        </Button>
      </Container>
    </div>
  );
}

export default Home;

