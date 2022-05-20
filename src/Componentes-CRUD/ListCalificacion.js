import React from 'react';

import RegistrarCalificacion from './FormsCalificacion';

function ListViewCalificacion(props){
    return(
<React.Fragment>
<div class="section bg-primary text-dark section-lg">
    <div class="container col-lg-11">
        <div class="row justify-content-center">
            <div class=" center col-12  ">
                <div class="mb-5">
                    <div class="text-center">
                        <strong class="h4">Lista de Años Lectivos</strong>
                    </div>
                    <RegistrarCalificacion/>
                    <div class="table-responsive-sm shadow-soft shadow-inset rounded">
                        <table class="table table-hover shadow-inset rounded">
                        <thead>
                            <tr>
                                <th class="border-0" scope="col" >ID</th>
                                <th class="border-0" scope="col" >Actividad</th>
                                <th class="border-0" scope="col" >Estudiante</th>
                                <th class="border-0" scope="col" >Calificación</th>
                                <th class="border-0" scope="col" >Fecha</th>
                                <th class="border-0" scope="col" >Descripción</th>
                                <th class="border-0" scope="col" >Estado</th>
                                <th class="border-0" scope="col" >Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row" id="firstyear2" rowspan="2">1</th>
                                <td headers="firstyear2 Bolter2 males2"> Leción</td>
                                <td headers="firstyear2 Bolter2 males2"> Juan Carlos</td>
                                <td headers="firstyear2 Bolter2 males2"> 8.5</td>
                                <td headers="firstyear2 Bolter2 males2"> 2/3/2022</td>
                                <td headers="firstyear2 Bolter2 males2"> Respondio tres preguntas mal</td>
                                <td headers="firstyear2 Bolter2 females2">Activo</td>
                                <td headers="firstyear2 Bolter2 females2">
                                    <div class=" components-section">
                                                <button class="btn btn-primary text-blue"  type="button">
                                                    Modificar
                                                </button>
                                                <button class="btn btn-primary text-warning" type="button">
                                                    Inactivar
                                                </button>
                                                <button class="btn btn-primary text-danger" type="button">
                                                    Eliminar
                                                </button> 
                                    </div>
                                </td>
                            </tr>
                            
                        </tbody>   
                        </table>
                    </div>
                </div>
            </div>
        </div>
        </div>
</div>
</React.Fragment>
    );
};

export default ListViewCalificacion;