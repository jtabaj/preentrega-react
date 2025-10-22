import React, { createContext, useContext, useState } from "react";

// Crear el contexto
// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext();

// Proveedor del contexto
export function AppProvider({ children }) {
  // Estado de autenticación
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [usuario, setUsuario] = useState({ nombre: "", email: "" });

  //--------------------------------------------------- 
  
  // Estado del carrito
  const [carrito, setCarrito] = useState([]);
  
  // Funciones para el carrito
const agregarCarrito = (producto) => {
  setCarrito((prevCarrito) => {
    const existente = prevCarrito.find((item) => item.id === producto.id);
    if (existente) {
      // Si ya existe, sumamos cantidad
      return prevCarrito.map((item) =>
        item.id === producto.id
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      );
    } else {
      // Si no existe, lo agregamos con cantidad 1
      return [...prevCarrito, { ...producto, cantidad: 1 }];
    }
  });
};

  const agregarUnidad = (id) => {
    const item = carrito.find((item) => item.id === id);
    if (item) {
      item.cantidad++;
      setCarrito([...carrito]);
    }
  };
  const eliminarUnidad = (id) => {
    const item = carrito.find((item) => item.id === id);
    if (item) {
      item.cantidad--;
      if (item.cantidad === 0) {
        setCarrito(carrito.filter((item) => item.id !== id));
      } else {
        setCarrito([...carrito]);
      }
    }
  };

  const eliminarCarrito = (id) => {
    setCarrito(carrito.filter((item) => item.id !== id));
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const formatJT = (num) => num.toLocaleString("es-AR", {minimumFractionDigits: 2, maximumFractionDigits: 2,});




//=============================================================================
//=============================================================================








  // Función para cerrar sesión
  const cerrarSesion = () => {
    setIsAuthenticated(false);
    setUsuario({ nombre: "", email: "" });
    vaciarCarrito(); 
  };

  // Valor que se provee a todos los componentes
  const value = {
    // Autenticación
    isAuthenticated,
    setIsAuthenticated,
    usuario,
    setUsuario,
    cerrarSesion,
   
    // Carrito
    carrito,
    vaciarCarrito,
    eliminarCarrito,
    agregarCarrito,
    agregarUnidad,
    eliminarUnidad,

    // Formateo de Nros
    formatJT
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext debe usarse dentro de AppProvider");
  }
  return context;
}
