
import './App.css';

// import Tarea from './componentes/Tarea.js';
// import TareaFormulario from './componentes/TareaFormulario.js';
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className="App">

      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
          {/* <TareaFormulario/> */}
          {/* <Tarea texto='Aprender React'/> */}
          <ListaDeTareas />
      </div>

    </div>
  );
}

export default App;
