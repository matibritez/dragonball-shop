import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Pages/Home";
import Personajes from "./Pages/Personajes";
import Carrito from "./Pages/Carrito";
import Login from "./Pages/Login";
import NavbarMenu from "./components/Navbar";
import Contacto from "./Pages/Contacto";
import Footer from "./components/Footer";

function App() {
  const [carrito, setCarrito] = useState([]);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const loggedUser = localStorage.getItem("isLogged");
    if (loggedUser === "true") setIsLogged(true);
  }, []);

  const agregarAlCarrito = (producto) => {
    const exist = carrito.find(p => p.mal_id === producto.mal_id);
    if (exist) {
      setCarrito(carrito.map(p => p.mal_id === producto.mal_id ? {...p, cantidad: p.cantidad + 1} : p));
    } else {
      setCarrito([...carrito, {...producto, cantidad: 1}]);
    }
  };

  const cambiarCantidad = (mal_id, cantidad) => {
    setCarrito(carrito
      .map(p => p.mal_id === mal_id ? {...p, cantidad: p.cantidad + cantidad} : p)
      .filter(p => p.cantidad > 0)
    );
  };

  const finalizarCompra = () => {
    alert("✅ Compra finalizada con éxito!");
    setCarrito([]);
  };

  const login = () => {
    setIsLogged(true);
    localStorage.setItem("isLogged", "true");
  };

  const logout = () => {
    setIsLogged(false);
    localStorage.removeItem("isLogged");
  };

  return (
    <Router>
      <NavbarMenu 
        carritoCount={carrito.reduce((a,b) => a + b.cantidad, 0)} 
        isLogged={isLogged} 
        onLogout={logout}
      />
      <Routes>
        <Route path="/" element={<Home agregarAlCarrito={agregarAlCarrito} />} />
        <Route path="/personajes" element={<Personajes agregarAlCarrito={agregarAlCarrito} />} />
        <Route path="/carrito" element={
          isLogged 
            ? <Carrito carrito={carrito} cambiarCantidad={cambiarCantidad} finalizarCompra={finalizarCompra} /> 
            : <Login onLogin={login} />
        } />
        <Route path="/login" element={<Login onLogin={login} />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
