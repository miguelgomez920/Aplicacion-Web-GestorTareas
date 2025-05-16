import React from 'react';
import '../hojas-de-estilo/Tarea.css';
import { CiCircleRemove } from "react-icons/ci"; 

//Componente funcional
function Tarea({ id, texto, completada, completarTarea, eliminarTarea}){ // componente funcional 'Tarea' con sus props
   
    /* ==================== codigo JSX(HTML) ======================= */
    return(
        <div className={completada ? 'tarea-contenedor completada': 'tarea-contenedor'}> 
            <div className='tarea-texto' onClick={() =>completarTarea(id)}> 
                {texto}
            </div>
            <div className='tarea-contenedor-iconos' onClick={() =>eliminarTarea(id)}> 
                <CiCircleRemove className='tarea-icono'/> {/* Renderiza el ícono de eliminación usando 'CiCircleRemove' de la librería 'react-icons'. */}
            </div>

        </div>
    );
}

export default Tarea;