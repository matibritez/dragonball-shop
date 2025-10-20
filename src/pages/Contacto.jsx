import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import Header from "../components/Header";

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: ""
  });

  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación básica
    if (!formData.nombre || !formData.email || !formData.mensaje) {
      setError("Por favor, completa todos los campos.");
      return;
    }

    setError("");
    setEnviado(true);

    // Simulación de envío
    console.log("Mensaje enviado:", formData);

    // Limpiar formulario después de enviar
    setFormData({ nombre: "", email: "", mensaje: "" });

    // Quitar alerta de éxito después de 3 segundos
    setTimeout(() => setEnviado(false), 3000);
  };

  return (
    <div>
      <Header titulo="📩 Contacto" />
      <Container className="mt-4" style={{ maxWidth: "600px" }}>
        {enviado && <Alert variant="success">¡Mensaje enviado con éxito!</Alert>}
        {error && <Alert variant="danger">{error}</Alert>}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="nombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa tu nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingresa tu email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="mensaje">
            <Form.Label>Mensaje</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Escribe tu mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default Contacto;
