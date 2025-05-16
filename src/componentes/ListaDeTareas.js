import React, { useState } from 'react'; // Importa React y el hook useState, que permite manejar el estado dentro del componente.
import TareaFormulario from './TareaFormulario.js';
import Tarea from './Tarea.js'
import '../hojas-de-estilo/ListaDeTareas.css'

//Componente funcional
function ListaDeTareas(){ /*componente funcional */

    /* ==================== variables ======================= */
    const [tareas, setTareas] = useState([]); /*Define un estado llamado 'tareas', que es un array que 
    almacena las tareas actuales. 'setTareas' es la función que actualiza el estado.*/


    /* ==================== Funciones ======================= */
    const agregarTarea = tarea => { 
        console.log(tarea);
        if(tarea.texto.trim()){ // Verifica si el texto de la tarea no está vacío o compuesto solo de espacios.
            tarea.texto = tarea.texto.trim() // Elimina espacios en blanco al principio y al final del texto.
            const tareasActualizadas = [tarea, ...tareas]; // Crea un nuevo array con la tarea recién agregada al inicio, seguida de las tareas existentes.
            setTareas(tareasActualizadas); // Actualiza el estado 'tareas' con el nuevo array que incluye la nueva tarea.
        }
    }

    const eliminarTarea = id =>{
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);  // Crea un nuevo array excluyendo con el filtro la tarea cuyo id coincide con el id pasado como argumento.
        setTareas(tareasActualizadas); // Actualiza el estado 'tareas' con el nuevo array sin la tarea eliminada.
    }

    const completarTarea = id =>{
        const tareasActualizadas = tareas.map(tarea => {
            if(tarea.id === id){ 
                tarea.completada = !tarea.completada;  // Cambia el estado 'completada' de la tarea (de true a false o viceversa).
            }
            return tarea;
        });
        setTareas(tareasActualizadas); // Actualiza el estado 'tareas' con el nuevo array de tareas, donde la tarea específica tiene su estado 'completada' cambiado.
    }
    

    /*==================== codigo JSX(HTML) ======================= */
    return(
        <>  {/*ponemos unicamente las flechas para no tener que agregar otro div que nos ocupe algun espacio */}

            <TareaFormulario onSubmit={agregarTarea} />   {/* enviamos la funcion al componente de tareaFormulario */}
            <div className='tareas-lista-contenedor'>  {/* Contenedor que agrupa la lista de tareas. */}
                {
                     /* Recorre el array 'tareas' y renderiza (crea) un componente Tarea por cada elemento del array. */
                    tareas.map((tarea) => 
                        <Tarea
                            key={tarea.id} // Asigna una clave única a cada tarea, basada en su id, para ayudar a React a identificar los elementos.
                            id={tarea.id} // Pasa el id de la tarea como prop al componente Tarea.
                            texto={tarea.texto}
                            completada={tarea.completada}
                            completarTarea={completarTarea} // Pasa la función 'completarTarea' como prop al componente Tarea para que se llame cuando se quiera completar una tarea
                            eliminarTarea={eliminarTarea}

                        /> 
                 )
                } 
            </div>

        </>
    );
}

export default ListaDeTareas;