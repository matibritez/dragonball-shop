import React from "react";
import { Container } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";

function Footer() {
  return (
    <footer
      className="bg-dark text-light py-4 mt-5"
      style={{
        position: "relative",
        bottom: 0,
        width: "100%",
        textAlign: "center",
      }}
    >
      <Container>
        <p className="mb-2">
          © {new Date().getFullYear()} <strong>DragonBallZ Shop</strong> — Todos
          los derechos reservados.
        </p>

        <div className="d-flex justify-content-center gap-4 mb-2">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="text-light fs-4"
          >
            <FaFacebook />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="text-light fs-4"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="text-light fs-4"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noreferrer"
            className="text-light fs-4"
          >
            <FaYoutube />
          </a>
        </div>

        <small>
          Desarrollado con ❤️ por <strong>Matias Britez</strong>
        </small>
      </Container>
    </footer>
  );
}

export default Footer;
