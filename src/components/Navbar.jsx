import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function NavbarMenu() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to="/">🐉 Dragon Ball Shop</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/">Home</Nav.Link>
          <Nav.Link as={NavLink} to="/personajes">Personajes</Nav.Link>
          <Nav.Link as={NavLink} to="/carrito">Carrito</Nav.Link>
          <Nav.Link as={NavLink} to="/contacto">Contacto</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavbarMenu;
