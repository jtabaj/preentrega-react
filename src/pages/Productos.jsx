import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button, Spinner, Container, Row, Col, Alert } from "react-bootstrap";
import MiBoton from "../components/MiBoton";
import { useCartContext } from "../context/CartContext";

const Productos = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { agregarCarrito, formatJT } = useCartContext();

  // Cargar productos desde la API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://68d99d6890a75154f0dac9e3.mockapi.io/tienda/prductos/");
        if (!res.ok) {
          throw new Error("Error al obtener productos");
        }
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("No se pudieron cargar los productos. Intenta nuevamente más tarde.");
      } finally {
        setLoading(false);
      }
    };
    
    fetchProducts();
  }, []);

  // Restaurar scroll después de que los productos se han renderizado
  useEffect(() => {
    if (products.length > 0) {
      const scrollY = sessionStorage.getItem("scrollPos");
      if (scrollY) {
        requestAnimationFrame(() => { 
          window.scrollTo({ top: parseInt(scrollY), behavior: "smooth" });
          sessionStorage.removeItem("scrollPos"); 
        });
      }
    }
  }, [products]);

  // Guardar posición de scroll antes de navegar
  const handleVerDetalle = (producto) => {
    sessionStorage.setItem("scrollPos", window.scrollY); 
    navigate(`/producto/${producto.id}`);
  };

  // 🌀 Loading
  if (loading)
    return (
      <div className="d-flex justify-content-center align-items-center vh-100 bg-dark text-white">
        <Spinner animation="border" role="status" className="me-2" />
        <span>Cargando productos...</span>
      </div>
    );

  // ⚠️ Error
  if (error)
    return (
      <Container className="mt-5">
        <Alert variant="danger" className="text-center">
          {error}
        </Alert>
      </Container>
    );

  // 🛍️ Productos
  return (
    <div 
      style={{ 
        backgroundColor: "#001f3f", 
        minHeight: "100vh", 
        padding: "2rem 1rem",
        paddingBottom: "5rem"
      }}
    >
      <Container>
        <h2 className="text-center text-white mb-4">Productos Disponibles</h2>

        <Row className="g-4">
          {products.map((p, index) => (
            <Col
              key={p.id}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              style={{
                animation: `fadeIn 0.5s ease ${index * 0.1}s forwards`,
                opacity: 0,
              }}
            >
              <Card className="h-100 shadow-sm border-0">
                <Card.Img
                  variant="top"
                  src={p.avatar}
                  alt={p.producto}
                  style={{
                    objectFit: "cover",
                    height: "200px",
                    borderTopLeftRadius: "0.5rem",
                    borderTopRightRadius: "0.5rem",
                  }}
                />
                <Card.Body>
                  <Card.Title className="text-center">{p.producto}</Card.Title>
                  <Card.Text className="text-muted" style={{ minHeight: "3rem" }}>
                    {p.descripcion || "Sin descripción disponible."}
                  </Card.Text>
                  <Card.Text className="fw-bold text-center mb-3">
                    Precio: ${formatJT(p.precio)}
                  </Card.Text>

                  <div className="d-flex justify-content-center gap-2">
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => handleVerDetalle(p)}
                    >
                      Ver detalle
                    </Button>
                    <MiBoton
                      texto="🛒 Agregar"
                      fondo="success"
                      funcAlClickear={() => agregarCarrito(p)}
                    />
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Productos;
