
import './App.css';
import React from 'react';

import Login from'./Paginas/Login';

import ListViewAnioLectivo from './Componentes-CRUD/ListAnioLectivo';
import ListViewActividad from './Componentes-CRUD/ListTipoActividad';
import ListViewAsignatura from './Componentes-CRUD/ListAsignatura';
import ListViewCalificacion from './Componentes-CRUD/ListCalificacion'
import ListViewEstudiante from './Componentes-CRUD/ListEstudiante';
import ListViewDocente from './Componentes-CRUD/ListDocente';
import ListViewCuso from './Componentes-CRUD/ListCurso';



function App() {
  return (
    
<div className="App">   

<Login/>
<ListViewAnioLectivo/>
<ListViewActividad/>
<ListViewAsignatura/>
<ListViewCalificacion/>
<ListViewEstudiante/>
<ListViewDocente/>
<ListViewCuso/>

</div>
  );
}

export default App;
