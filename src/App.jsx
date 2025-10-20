import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarMenu from "./components/Navbar";
import Home from "./Pages/Home";
import Personajes from "./pages/Personajes";
import Carrito from "./Pages/Carrito";
import Contacto from "./Pages/Contacto";
import { Toast, ToastContainer } from "react-bootstrap";

function App() {
  const [carrito, setCarrito] = useState([]);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const agregarAlCarrito = (producto) => {
    setCarrito((prev) => {
      const exist = prev.find((p) => p.mal_id === producto.mal_id);
      if (exist) {
        return prev.map((p) =>
          p.mal_id === producto.mal_id
            ? { ...p, cantidad: p.cantidad + 1 }
            : p
        );
      } else {
        return [...prev, producto];
      }
    });
    setToastMessage(`${producto.name} agregado al carrito`);
    setShowToast(true);
  };

  const cambiarCantidad = (mal_id, cantidad) => {
    setCarrito((prev) =>
      prev
        .map((p) =>
          p.mal_id === mal_id ? { ...p, cantidad: p.cantidad + cantidad } : p
        )
        .filter((p) => p.cantidad > 0)
    );
  };

  return (
    <Router>
      <NavbarMenu carritoCount={carrito.reduce((a, b) => a + b.cantidad, 0)} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/personajes"
          element={<Personajes agregarAlCarrito={agregarAlCarrito} />}
        />
        <Route
          path="/carrito"
          element={<Carrito carrito={carrito} cambiarCantidad={cambiarCantidad} />}
        />
        <Route path="/contacto" element={<Contacto/>} />
      </Routes>

      <ToastContainer position="top-end" className="p-3">
        <Toast
          bg="success"
          onClose={() => setShowToast(false)}
          show={showToast}
          delay={2000}
          autohide
        >
          <Toast.Body className="text-white">{toastMessage}</Toast.Body>
        </Toast>
      </ToastContainer>
    </Router>
  );
}

export default App;
