import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

function NavbarMenu({ carritoCount, isLogged, onLogout }) {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    if (isLogged) {
      onLogout();
    } else {
      navigate("/login");
    }
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">DragonBall Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/personajes">Personajes</Nav.Link>
            <Nav.Link as={Link} to="/carrito">🛒 Carrito ({carritoCount})</Nav.Link>
            <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
          </Nav>
          <Button variant={isLogged ? "outline-danger" : "outline-light"} onClick={handleLoginClick}>
            {isLogged ? "Cerrar sesión" : "Iniciar sesión"}
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMenu;
