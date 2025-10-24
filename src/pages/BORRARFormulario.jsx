import React, { useState } from 'react';
import MiBoton from '../components/MiBoton.jsx';

function Formulario() {
  const [formulario, setFormulario] = useState({
    nombre: '',
    apellido: '',
    precio: ''
  });

  function manejarFormulario(evento) {
      evento.preventDefault();
      alert(`Formulario enviado por: ${formulario.nombre} ${formulario.apellido}, con un precio de: ${formulario.precio}`);
      setFormulario({ nombre: '', apellido: '', precio: '' });
    }

  const CambiosFormulario = (e) => {
      setFormulario({ ...formulario, [e.target.name]: e.target.value });
    }

  return (
    <>
      <form onSubmit={manejarFormulario}>
        <label htmlFor="nombre">Nombre: </label>
        <input
            type="text" name="nombre" value={formulario.nombre} onChange={CambiosFormulario}
            placeholder="Ingresa tu nombre"
        />
        <br />
        <label htmlFor="apellido">Apellido: </label>
        <input
            type="text" name="apellido" value={formulario.apellido} onChange={CambiosFormulario}
            placeholder="Ingresa tu apellido"
        />
        <br />
        <label htmlFor="precio">Precio: </label>
        <input
            type="text" name="precio" value={formulario.precio} onChange={CambiosFormulario}
            placeholder="Ingresa el precio"
         />
        <br />

        <MiBoton type="submit"  texto="Enviar" />
      </form>
      <p>Nombre: {formulario.nombre || 'anónimo'}</p>
      <p>Apellido: {formulario.apellido || 'anónimo'}</p>
      <p>Precio: {formulario.precio || 'No ingresado'}</p>
  </>
  );
}

export default Formulario;