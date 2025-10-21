import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Login({ onLogin }) {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (usuario === "admin" && password === "1234") {
      setMensaje("✅ Inicio de sesión exitoso, ¡bienvenido!");
      onLogin();
    } else {
      setMensaje("❌ Usuario o contraseña incorrectos");
    }

    setTimeout(() => setMensaje(""), 2000);
  };

  return (
    <Container
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ minHeight: "70vh", position: "relative" }}
    >
      <h2 className="mb-3">
        <FontAwesomeIcon icon="user" /> Iniciar Sesión
      </h2>
      <p className="text-muted mb-4">
        Ingresá con <strong>usuario:</strong> admin y <strong>contraseña:</strong> 1234
      </p>

      <Form onSubmit={handleSubmit} style={{ width: "320px" }}>
        <Form.Group className="mb-3">
          <Form.Label>Usuario</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresá tu usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingresá tu contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button type="submit" variant="success" className="w-100">
          Iniciar sesión
        </Button>
      </Form>

      {/* Mensaje visual tipo toast (sin librerías extras) */}
      {mensaje && (
        <div
          style={{
            position: "fixed",
            bottom: "25px",
            right: "25px",
            backgroundColor: mensaje.includes("✅") ? "#28a745" : "#dc3545",
            color: "#fff",
            padding: "14px 20px",
            borderRadius: "10px",
            fontWeight: "bold",
            boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
            zIndex: 1000,
            transition: "all 0.3s ease-in-out",
          }}
        >
          {mensaje}
        </div>
      )}
    </Container>
  );
}

export default Login;
