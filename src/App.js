
import './App.css';

import Login from'./Paginas/Login'
import RegistroEstudiante from'./vistas-crup/RegistrarAnioLectivo'
import RegistroTipoActividad from'./vistas-crup/ResgistrarTipoActividad'
import RegistrarEstudiante from './vistas-crup/RegistrarEstudiante';


function App() {
  return (
    <div className="App">

     <Login/>
     <RegistroEstudiante/>
     <RegistroTipoActividad/>
     <RegistrarEstudiante/>


    </div>
  );
}

export default App;
