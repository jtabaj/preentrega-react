import React from "react";
import { Link } from "react-router-dom";
import { Container, Card } from "react-bootstrap";
import MiBoton from "../components/MiBoton";

function Servicios() {
  return (
    <Container className="mt-5 d-flex justify-content-center">
      <Card className="shadow-lg border-0 rounded-4 p-4 text-center" style={{ maxWidth: "600px" }}>
        <h2 className="text-muted fw-bold mb-3">Nuestros Servicios</h2>
        <p className="text-muted">
          Ofrecemos una amplia variedad de servicios pensados para acompañarte en cada etapa de tu proyecto.  
          Nos enfocamos en brindar soluciones prácticas, asesoramiento personalizado y una atención cercana.  
          Próximamente encontrarás más detalles sobre cada servicio disponible.
        </p>
        <hr />
        <Link to="/">
          <MiBoton texto="Volver a la página principal" fondo="outline-success" />
        </Link>
      </Card>
    </Container>
  );
}

export default Servicios;
