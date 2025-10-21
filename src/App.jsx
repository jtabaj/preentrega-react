import React from "react";
import Header from "./components/Header.jsx"; // Ajustá la ruta si es necesario
import { Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio.jsx";
import Servicios from "./pages/Servicios.jsx";
import Productos from "./pages/Productos.jsx";
import Producto from "./pages/Producto.jsx";
import Carrito from "./pages/Carrito.jsx";
import Footer from "./components/Footer.jsx";
import { AppProvider } from "./context/AppContext";
import RutaProtegida from "./pages/RutaProtegida";
import Pagar from "./pages/Pagar";
import IniciarSesion from "./pages/IniciarSesion";

function App() {
  return (
    <>
        <AppProvider>
      <Header />
      <div className="container mt-4">
          <p>Bienvenido a nuestra aplicación</p>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/producto/:id" element={<Producto />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/iniciar-sesion" element={<IniciarSesion />} />
            <Route path="/pagar" element={ <RutaProtegida>
              <Pagar  />
            </RutaProtegida>
          }
        />
          </Routes>
      </div>

      <Footer />
        </AppProvider>
    </>
  );
}

export default App;
