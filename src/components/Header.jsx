import React from "react";
import { Container } from "react-bootstrap";

function Header({ titulo }) {
  return (
    <Container className="text-center mt-4 mb-4">
      <h1>{titulo}</h1>
      <hr/>
    </Container>
  );
}

export default Header;
