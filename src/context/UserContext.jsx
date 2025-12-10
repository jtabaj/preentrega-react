import React, { createContext, useContext, useState } from "react";
import { useNavigate} from "react-router-dom";

// Crear el contexto
// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext();

// Proveedor del contexto
export function UserProvider({ children }) {
  // Estado de autenticación
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [usuario, setUsuario]                 = useState({ nombre: "", email: "" });
  const navigate = useNavigate();

  const iniciarSesion = (nombre) => {
    setIsAuthenticated(true);
     const token = `fake-token-${nombre}`;
    localStorage.setItem("authToken", token);

    const emailGuardado = localStorage.getItem("authEmail");
    const nombreGuardado = localStorage.getItem("authNombre");
    setUsuario({
      nombre: nombreGuardado,
      email: emailGuardado || "",
    });
  };
  
  // Función para cerrar sesión
  const cerrarSesion = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("authToken");
    localStorage.removeItem("authEmail");
    localStorage.removeItem("authNombre");
    setUsuario({ nombre: "", email: "" });
    navigate("/productos");
  };

  // Valor que se provee a todos los componentes
  const value = {
    // Autenticación
    isAuthenticated,
    usuario,
    esAdmin: usuario?.nombre === 'admin',
    iniciarSesion,
    cerrarSesion,
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useUserContext() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext debe usarse dentro de UserProvider");
  }
  return context;
}
