import React from 'react';

import RegistrarCurso from'./FormsCurso'

function ListViewCurso(props){
    return(
<React.Fragment>
<div class="section bg-primary text-dark section-lg">
    <div class="container">
        <div class="row justify-content-center">
            <div class=" center col-9  ">
                <div class="mb-5">
                    <div class="text-center">
                        <span class="h4">Lista de Actividades</span>
                    </div>
                    <RegistrarCurso/>
                    <div class="table-responsive-sm shadow-soft shadow-inset rounded">
                        <table class="table table-hover shadow-inset rounded">
                            <thead>
                                <tr>
                                    <th class="border-0" scope="col" >ID</th>
                                    <th class="border-0" scope="col" >Curso</th>
                                    <th class="border-0" scope="col" >Paralelo</th>
                                    <th class="border-0" scope="col" >Año Lectivo</th>
                                    <th class="border-0" scope="col" >Acción</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row" id="firstyear2" rowspan="2">1</th>
                                    <td headers="firstyear2 Bolter2 males2"> Noveno</td>
                                    <td headers="firstyear2 Bolter2 males2"> A</td>
                                    <td headers="firstyear2 Bolter2 males2"> 2022 - 2022</td>
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

export default ListViewCurso;