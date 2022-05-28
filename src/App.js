
import './App.css';
import React, {useEffect} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import Login from'./Paginas/Login';
import ListViewAnioLectivo from './Componentes-CRUD/ListAnioLectivo';
import ListViewActividad from './Componentes-CRUD/ListTipoActividad';
import ListViewAsignatura from './Componentes-CRUD/ListAsignatura';
import ListViewCalificacion from './Componentes-CRUD/ListCalificacion'
import ListViewEstudiante from './Componentes-CRUD/ListEstudiante';
import ListViewDocente from './Componentes-CRUD/ListDocente';
import ListViewCuso from './Componentes-CRUD/ListCurso';




function App() {

  const [isReadyForInstall, setIsReadyForInstall] = React.useState(false);

    useEffect(() => {
    window.addEventListener("beforeinstallprompt", (event) => {
      // Prevent the mini-infobar from appearing on mobile.
      event.preventDefault();
      console.log("👍", "beforeinstallprompt", event);
      // Stash the event so it can be triggered later.
      window.deferredPrompt = event;
      // Remove the 'hidden' class from the install button container.
      setIsReadyForInstall(true);
    });
  }, []);

  async function downloadApp() {
    console.log("👍", "butInstall-clicked");
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
      // The deferred prompt isn't available.
      console.log("oops, no prompt event guardado en window");
      return;
    }
    // Show the install prompt.
    promptEvent.prompt();
    // Log the result
    const result = await promptEvent.userChoice;
    console.log("👍", "userChoice", result);
    // Reset the deferred prompt variable, since
    // prompt() can only be called once.
    window.deferredPrompt = null;
    // Hide the install button.
    setIsReadyForInstall(false);
  }

  return (
    
<div className="App">   
<React.Fragment>
<nav id="navbar-main" aria-label="Primary navigation" class="navbar navbar-main navbar-expand-lg navbar-theme-primary headroom navbar-light navbar-transparent navbar-theme-primary">

        <div class="container position-relative">
            <div class="navbar-collapse collapse" id="navbar_global">
                <div class="navbar-collapse-header">
                    <div class="row">

                        <div class="col-6 collapse-close">
                            <a href="#navbar_global" class="fas fa-times" data-toggle="collapse" 
                            data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false" 
                            title="close" aria-label="Toggle navigation"></a>
                        </div>
                    </div>
                </div>
               
                <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
                    <li class="nav-item dropdown">
                        <a  class="nav-link" data-toggle="dropdown" >
                            <span class="nav-link-inner-text">Paginas</span>
                            <span class="fas fa-angle-down nav-link-arrow ml-2"></span>
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="/">Inicio  </a></li>
                            <li><a class="dropdown-item" href="/lectivo">Año lectivo  </a></li>
                        </ul>
                    </li>
                </ul>

                { isReadyForInstall && <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
                    <li class="nav-item dropdown">
                        <a  class="nav-link" data-toggle="dropdown" >
                        <button class="btn btn-pill btn-pinterest" type="button"
                        onclick={()=> downloadApp}>
                            <span class="mr-1"><span class="fab fa-pinterest-p"></span></span>
                            Descargar
                        </button>
                        </a>
                    </li>
                </ul>}
              
            </div>
        </div>
        <div>
    

    
  </div>

</nav>
</React.Fragment>
<Router>
<Routes>
       
        <Route path="/lectivo"  element={<ListViewAnioLectivo/>} />
        <Route path="/"  element={<Login/>} />
</Routes>
</Router>
</div>
  );
}

export default App;
