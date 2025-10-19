import React from "react";
import Header from "../components/Header";
import { Container } from "react-bootstrap";

function Home() {
  return (
    <div>
      <Header titulo="Bienvenido a Dragon Ball Shop 🐉" />
      <Container className="text-center">
        <p>Explora los personajes de Dragon Ball Z y agrega tus favoritos al carrito.</p>
      </Container>
    </div>
  );
}

export default Home;
