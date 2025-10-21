import React from "react";
import { Table } from "react-bootstrap";
import { useAppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import MiBoton from "../components/MiBoton.jsx";

function Carrito() {
  const {
    carrito,
    vaciarCarrito,
    eliminarCarrito,
    agregarUnidad,
    eliminarUnidad,
    formatJT,
  } = useAppContext();

  const total = carrito.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );

  const navigate = useNavigate();

  const irAPagar = () => {
    navigate("/pagar", { state: { carrito } });
  };
  
  // Función para volver a la página anterior
  const volverAProductos = () => {
    navigate(-1);
  };

  return (
    <div style={{ marginTop: "2rem", padding: "1rem" }}>
      <h2>Carrito de Compras</h2>

      {carrito.length === 0 ? (
        <p>No hay productos en el carrito</p>
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
                <th>Acciones</th>
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
                  <td>
                    <MiBoton
                      texto="🗑️"
                      fondo="outline-danger"
                      funcAlClickear={() => eliminarCarrito(x.id)}
                    />{" "}
                    <MiBoton
                      texto="+"
                      fondo="success"
                      funcAlClickear={() => agregarUnidad(x.id)}
                    />{" "}
                    <MiBoton
                      texto="-"
                      fondo="danger"
                      funcAlClickear={() => eliminarUnidad(x.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <p
            style={{
              fontWeight: "bold",
              textAlign: "right",
              marginTop: "1rem",
              fontSize: "1.2rem",
            }}
          >
            Total a pagar: ${formatJT(total)}
          </p>

          <div 
            style={{ 
              textAlign: "right",
              display: "flex",
              justifyContent: "flex-end", // Asegura que los botones se alineen a la derecha
              gap: "0.5rem" // Espacio entre botones
            }}
          >
            {/* BOTÓN VOLVER AÑADIDO */}
            <MiBoton
              texto="Volver"
              fondo="outline-secondary"
              funcAlClickear={volverAProductos}
            />
            
            <MiBoton
              texto="Vaciar carrito"
              fondo="outline-danger"
              funcAlClickear={vaciarCarrito}
            />
            
            <MiBoton 
              texto="Pagar"
              fondo="success"
              funcAlClickear={irAPagar}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Carrito;