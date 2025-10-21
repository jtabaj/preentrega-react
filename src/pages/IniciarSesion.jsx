import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { Container, Card, Form, Button, Row, Col } from "react-bootstrap";
import MiBoton from "../components/MiBoton";

export default function IniciarSesion() {
  const navigate = useNavigate();
  const ubicacion = useLocation();
  const { setIsAuthenticated, setUsuario, usuario, cerrarSesion } = useAppContext();

  const [formulario, setFormulario] = useState({ nombre: "", email: "" });

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (formulario.nombre && formulario.email) {
      setIsAuthenticated(true);
      setUsuario(formulario);

      if (ubicacion.state?.carrito) {
        navigate("/pagar", { state: { carrito: ubicacion.state.carrito } });
      } else {
        navigate("/productos");
      }
    } else {
      alert("Completa todos los datos");
    }
  };

  return (
    <Container className="d-flex justify-content-center pt-5 vh-100">
      <Row className="w-100">
        <Col md={{ span: 6, offset: 3 }}>
          <Card className="shadow-lg border-0 rounded-4">
            <Card.Header className="bg-secondary text-white text-center fs-5 fw-semibold">
              Inicia sesión para continuar
            </Card.Header>

            <Card.Body className="p-4">
              {/* Botón Cerrar sesión */}
              {usuario && (
                <div className="text-end mb-3">
                  <MiBoton
                    texto="Cerrar sesión"
                    fondo="outline-danger"
                    funcAlClickear={cerrarSesion}
                  />
                </div>
              )}

              <Form onSubmit={manejarEnvio}>
                <Form.Group className="mb-3" controlId="nombre">
                  <Form.Label>Nombre completo</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingresa tu nombre"
                    value={formulario.nombre}
                    onChange={(e) =>
                      setFormulario({ ...formulario, nombre: e.target.value })
                    }
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="email">
                  <Form.Label>Correo electrónico</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="nombre@correo.com"
                    value={formulario.email}
                    onChange={(e) =>
                      setFormulario({ ...formulario, email: e.target.value })
                    }
                    required
                  />
                </Form.Group>

                <div className="d-flex justify-content-between">
                  <Button variant="primary" type="submit" className="px-4">
                    Iniciar sesión
                  </Button>
                  <Button
                    variant="outline-secondary"
                    type="button"
                    onClick={() => navigate(-1)}
                  >
                    Cancelar
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
