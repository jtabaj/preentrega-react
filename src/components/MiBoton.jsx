import React from 'react';
import { Button } from "react-bootstrap";


const MiBoton = ({fondo, funcAlClickear, children, texto , icono }) => (

//   console.log('Renderizando botón:', texto || 'texto x defecto'),
//   console.log('Renderizando botón:', funcAlClickear),

    // <button className='mi-boton' style={{ backgroundColor: fondo || 'blue' }}  
    <Button type="button" variant={fondo || 'warning'}   
    onClick={funcAlClickear /* || (() => alert('click x defecto'))*/ }>
        {icono && <span className="me-1">{icono}</span>}
        {<span>{texto || 'texto x defecto'}</span>}
        {children}
    </Button>
);

export default MiBoton; 