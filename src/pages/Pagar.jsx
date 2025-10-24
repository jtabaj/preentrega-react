import { useNavigate }    from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import { useUserContext } from "../context/UserContext";
import { Table, Button, Container, Row, Col, Card } from "react-bootstrap";
import MiBoton            from "../components/MiBoton";

export default function Pagar() {
  const { carrito, vaciarCarrito, formatJT } = useCartContext();
  const { usuario, cerrarSesion }            = useUserContext();
  const navigate = useNavigate();

  // Calculo del total
  const total = carrito.reduce(
    (suma, producto) => suma + producto.precio * producto.cantidad,
    0
  );

  // Función para finalizar compra
  const comprar = () => {
    alert("¡Compra realizada con éxito!");
    vaciarCarrito(); // Limpiar carrito después de comprar
    navigate("/productos");
  };

  return (
    <Container style={{ minHeight: "100vh", padding: "2rem 0" }}>
      {/* Info del usuario */}
      <Card className="mb-4 shadow-sm">
        <Card.Body>
          <Row className="align-items-center">
            <Col>
              <h4>{usuario.nombre}</h4>
              <p className="mb-0">Email: {usuario.email}</p>
            </Col>
            <Col className="text-end">
              <MiBoton texto="Cerrar sesión" fondo="outline-danger" funcAlClickear={cerrarSesion} />
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Carrito */}
      <Card className="mb-4 shadow-sm">
        <Card.Body>
          <h4 className="mb-3">Tu compra:</h4>
          {carrito.length === 0 ? (
            <p className="text-center text-muted">No hay productos en tu carrito.</p>
          ) : (
            <>
              <Table
                striped
                bordered
                hover
                responsive
                size="sm"
                className="align-middle text-center"
              >
                <thead className="table-dark">
                  <tr>
                    <th>Imagen</th>
                    <th>Producto</th>
                    <th>Precio Unitario</th>
                    <th>Cantidad</th>
                    <th>Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {carrito.map((x) => (
                    <tr key={x.id}>
                      <td>
                        <img
                          src={x.avatar}
                          alt={x.nombre}
                          style={{
                            width: "3rem",
                            height: "3rem",
                            borderRadius: "8px",
                            objectFit: "cover",
                          }}
                        />
                      </td>
                      <td>{x.producto}</td>
                      <td>${formatJT(x.precio)}</td>
                      <td>{x.cantidad}</td>
                      <td>${formatJT(x.cantidad * x.precio)}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>

              <p className="text-end fw-bold fs-5 mt-3">
                Total a pagar: ${formatJT(total)}
              </p>
            </>
          )}
        </Card.Body>
      </Card>

      {/* Acciones */}
      <div className="d-flex justify-content-center gap-3 flex-wrap">
        {carrito.length > 0 && (
          <MiBoton texto="Confirmar y Pagar" fondo="success" funcAlClickear={comprar} />
        )}
        <MiBoton
          texto={carrito.length > 0 ? "Seguir Comprando" : "Volver a Productos"}
          fondo="primary"
          funcAlClickear={() => navigate("/productos")}
        />
      </div>
    </Container>
  );
}
