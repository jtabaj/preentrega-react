import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import MiBoton from "../components/MiBoton";

function Inicio() {
  return (
    <div
      style={{
        height: "100vh",
        background: "linear-gradient(135deg, #e3f2fd, #ffffff)",
        display: "flex",
        // alignItems: "center",
        // justifyContent: "center",
      }}
    >
      <Container className="text-ceter">
        <h1 className="fw-bold text-muted mb-3">¡Bienvenidos a Mi Tienda!</h1>

      <img
        src="react.gif"
        alt="Banner"
        style={{ width: "40%", maxHeight: "400px", objectFit: "cover", borderRadius: "35px", padding: "25px" }}
      />

        <p
          className="text-muted fs-5 mb-4"
          style={{ maxWidth: "600px"}}
        >
          Este es el punto de partida de nuestro sitio.  
          Desde aquí podés acceder a las distintas secciones, conocer nuestros
          productos, explorar servicios y descubrir todo lo nuevo que tenemos para vos.
        </p>

        <Link to="/productos">
          <MiBoton
            texto="Explora nuestros productos"
            fondo="success"
            style={{ padding: "10px 30px", borderRadius: "50px" }}
          />
        </Link>
      </Container>
    </div>
  );
}

export default Inicio;
