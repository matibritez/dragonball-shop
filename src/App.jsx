import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarMenu from "./components/Navbar";
import Home from "./Pages/Home";
import Personajes from "./pages/Personajes";
import Carrito from "./Pages/Carrito";
import Contacto from "./Pages/Contacto";
import Footer from "./components/Footer";

function App() {
  const [carrito, setCarrito] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");

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
        return [...prev, { ...producto, cantidad: 1 }];
      }
    });
    setNotificationMessage(`${producto.name} agregado al carrito`);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000);
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

  // Función para finalizar compra desde Carrito
  const finalizarCompra = () => {
    setCarrito([]); // Vaciar carrito
    setNotificationMessage("✅ ¡Compra finalizada con éxito!");
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000);
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
          element={
            <Carrito
              carrito={carrito}
              cambiarCantidad={cambiarCantidad}
              finalizarCompra={finalizarCompra} // Pasamos la función
            />
          }
        />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>

      {/* Notificación abajo a la derecha */}
      {showNotification && (
        <div
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            backgroundColor: "#198754",
            color: "white",
            padding: "15px 20px",
            borderRadius: "8px",
            boxShadow: "0px 0px 10px rgba(0,0,0,0.3)",
            zIndex: 9999,
            transition: "all 0.3s ease",
            fontWeight: "bold",
          }}
        >
          {notificationMessage}
        </div>
      )}

      <Footer />
    </Router>
  );
}

export default App;
