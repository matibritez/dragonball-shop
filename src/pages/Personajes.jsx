import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner, Alert, Button } from 'react-bootstrap';
import PersonajeCard from '../components/PersonajeCard';

const Personajes = ({ agregarAlCarrito }) => {
  const [personajes, setPersonajes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const fetchPersonajes = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch('https://api.jikan.moe/v4/anime/813/characters'); 
      if (!res.ok) throw new Error('Error en la API');

      const data = await res.json();

      // Agregamos precio aleatorio a cada personaje
      const personajesConPrecio = data.data.slice(0, 24).map(p => ({
        ...p.character,
        price: Math.floor(Math.random() * 200) + 50 // precio entre 50 y 250
      }));

      setPersonajes(personajesConPrecio);
    } catch (err) {
      console.error(err);
      setError('Error al cargar los personajes');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPersonajes();

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading) return <div className="d-flex justify-content-center mt-5"><Spinner animation="border" /></div>;
  if (error) return <Container className="mt-5"><Alert variant="danger">{error}</Alert></Container>;

  return (
    <Container className="mt-4 position-relative">
      <Row className="d-flex flex-wrap justify-content-center">
        {personajes.map((p) => (
          <PersonajeCard 
            key={p.mal_id} 
            personaje={p} 
            agregarAlCarrito={agregarAlCarrito} 
          />
        ))}
      </Row>

      {/* Botón para subir al inicio */}
      {showScrollTop && (
        <Button 
          variant="primary" 
          style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            fontSize: '20px',
          }}
          onClick={scrollTop}
        >
          ↑
        </Button>
      )}
    </Container>
  );
};

export default Personajes;
