import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Card, Container, Row, Col } from "react-bootstrap";
import MiBoton from "../components/MiBoton";
import { useAppContext } from "../context/AppContext";

function Producto() {
  const location = useLocation();
  const navigate = useNavigate();
  const { producto } = location.state || {};
  const { formatJT } = useAppContext();

  if (!producto) {
    return (
      <Container className="text-center mt-5">
        <h4 className="text-danger">⚠️ Producto no encontrado</h4>
        <MiBoton
          texto="Volver"
          fondo="outline-secondary"
          funcAlClickear={() => navigate(-1)}
        />
      </Container>
    );
  }

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6} lg={5}>
          <Card className="shadow-lg border-0 rounded-4">
            <Card.Img
              variant="top"
              src={producto.avatar}
              alt={producto.nombre}
              style={{
                height: "400px",
                objectFit: "contain", 
                padding: "15px", // Añade un pequeño padding para separarla de los bordes del Card
                borderTopLeftRadius: "1rem",
                borderTopRightRadius: "1rem",
              }}
            />
            <Card.Body className="text-center">
              <Card.Title className="fw-bold fs-4 text-primary">
                {producto.producto}
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Precio: ${formatJT(producto.precio)}
              </Card.Subtitle>
              <Card.Text className="mt-3">
                {producto.descripcion || "Sin descripción disponible."}
              </Card.Text>
              <div className="mt-4">
                <MiBoton
                  texto="Volver"
                  fondo="outline-primary"
                  funcAlClickear={() => navigate(-1)}
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Producto;