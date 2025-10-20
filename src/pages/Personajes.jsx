import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner, Alert } from 'react-bootstrap';
import PersonajeCard from '../components/PersonajeCard';

const Personajes = () => {
  const [personajes, setPersonajes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPersonajes = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch('https://api.jikan.moe/v4/anime/813/characters'); 
      if (!res.ok) throw new Error('Error en la API');

      const data = await res.json();

      setPersonajes(data.data.slice(0, 24));
    } catch (err) {
      console.error(err);
      setError('Error al cargar los personajes');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPersonajes();
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center mt-5">
        <Spinner animation="border" />
      </div>
    );
  }

  if (error) {
    return (
      <Container className="mt-5">
        <Alert variant="danger">{error}</Alert>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <Row className="d-flex flex-wrap justify-content-center">
        {personajes.map((p) => (
          <PersonajeCard key={p.character.mal_id} personaje={p.character} />
        ))}
      </Row>
    </Container>
  );
};

export default Personajes;
