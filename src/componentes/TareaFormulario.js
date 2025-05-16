import React, {useState} from 'react'; 
import '../hojas-de-estilo/TareaFormulario.css';
import { v4 as uuidv4 } from 'uuid'; // Importa la función uuidv4 del paquete 'uuid', que se usa para generar identificadores únicos (UUIDs).

//Componente funcional
function TareaFormulario(props){ 

    /* ==================== funciones ======================= */
    const [input, setInput] = useState(''); // Declara un estado 'input' para almacenar el valor del campo de entrada (input).

    const manejarCambio = e => {
        setInput(e.target.value);
    }

    const manejarEnvio = e => {
        e.preventDefault(); // Evita que el formulario se envíe automáticamente y recargue la página.

        //creamos nueva tarea
        const tareaNueva = {  
            id : uuidv4(), // Genera un identificador único para la nueva tarea usando 'uuidv4'.
            texto : input,  
            completada : false // tarea pendiente
        }

        props.onSubmit(tareaNueva);
    }

    /* ==================== codigo JSX(HTML) ======================= */
    return(
        <form className='tarea-formulario' onSubmit={manejarEnvio}>   {/* Renderiza (crea) un formulario que ejecuta 'manejarEnvio' cuando se envía. */}
            <input 
            className='tarea-input' 
            type='text' 
            placeholder='Escribe una Tarea' 
            name='texto'
            onChange={manejarCambio} // Establece un campo de entrada de texto. Cuando el usuario escribe cualquier cosa (es decir cuando hay un cambio "onchange") en el input, entonces se ejecuta 'manejarCambio'.
            />
            <button className='tarea-boton'>Agregar Tarea</button>
        </form>
    );
}

export default TareaFormulario;