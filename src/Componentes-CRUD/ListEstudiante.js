import React from 'react';

import RegistrarEstudiante from'./FormsEstudiante';

function ListViewEstudiante(props){
    return(
<React.Fragment>
<div class="section bg-primary text-dark section-lg">
    <div class="container col-lg-12">
        <div class="row justify-content-center">
            <div class=" center col-12  ">
                <div class="mb-5">
                    <div class="text-center">
                        <strong class="h4">Lista de Estudiantes</strong>
                    </div>
                    <RegistrarEstudiante/>
                    <div class="table-responsive-sm shadow-soft shadow-inset rounded">
                        <table class="table table-hover shadow-inset rounded">
                        <thead>
                            <tr>
                                <th class="border-0" scope="col" >ID</th>
                                <th class="border-0" scope="col" >Cédula</th>
                                <th class="border-0" scope="col" >Nonbres</th>
                                <th class="border-0" scope="col" >Apellidos</th>
                                <th class="border-0" scope="col" >Curso</th>
                                <th class="border-0" scope="col" >Teléfono</th>
                                <th class="border-0" scope="col" >Correo Electrónico</th>
                                <th class="border-0" scope="col" >Dirección</th>
                                <th class="border-0" scope="col" >Estado</th>
                                <th class="border-0" scope="col" >Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row" id="firstyear2" rowspan="2">1</th>
                                <td headers="firstyear2 Bolter2 males2"> 0705556988</td>
                                <td headers="firstyear2 Bolter2 males2"> Juan Pedro</td>
                                <td headers="firstyear2 Bolter2 males2"> Andrade Gimenes</td>
                                <td headers="firstyear2 Bolter2 males2"> Octavo A</td>
                                <td headers="firstyear2 Bolter2 males2"> 090566658</td>
                                <td headers="firstyear2 Bolter2 males2"> example@gmail.com</td>
                                <td headers="firstyear2 Bolter2 males2"> Pasaje- Calle</td>
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

export default ListViewEstudiante;