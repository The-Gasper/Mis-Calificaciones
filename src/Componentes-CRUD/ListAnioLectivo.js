import React, {useState} from 'react';

import {FormsAnioLectivo, UpdateAnioLectivo, DeleteAnioLectivo} from'./FormsAnioLectivo';

function ListViewAnioLectivo (props){


    const setInput = useState('');

    const agregarInput = valor => {
        setInput( valor);
      };

    
    return(
<React.Fragment>
<div class="section bg-primary text-dark section-lg">
    <div class="container">
        <div class="row justify-content-center">
            <div class=" center col-9  ">
                <div class="mb-5">
                    <div class="text-center">
                        <span class="h2">Años Lectivos</span>
                    </div>

                    <FormsAnioLectivo agregarInput={ agregarInput }>Agregar</FormsAnioLectivo>

                <div class="form-group">
                    <div class="input-group mb-4">
                        <input class="form-control" id="exampleInputIcon2" placeholder="Buscar" aria-label="Input group" type="text"/>
                        <div class="input-group-append">
                            <span class="input-group-text"><span class="fas fa-search"></span></span>
                        </div>
                    </div>
                </div>

                    <div class="table-responsive-sm shadow-soft shadow-inset rounded">
                        <table class="table table-hover shadow-inset rounded">
                        <thead>
                            <tr>
                                <th class="border-0" scope="col" >ID</th>
                                <th class="border-0" scope="col" >Año Lectivo</th>
                                <th class="border-0" scope="col" >Estado</th>
                                <th class="border-0" scope="col" >Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row" id="id" rowspan="2">1</th>
                                <td headers="firstyear2 Bolter2 males2"> 2022 - 2022</td>
                                <td headers="firstyear2 Bolter2 females2">Activo</td>
                                <td headers="firstyear2 Bolter2 females2">                
                                    <div class="components-section">  
                                        <div class="row justify-content-center">
                                            <div class="col-lg-12">
                                            <UpdateAnioLectivo agregarInput={ agregarInput }>Modificar</UpdateAnioLectivo>
                                            <DeleteAnioLectivo agregarInput={ agregarInput }>Eliminar</DeleteAnioLectivo>
                                            </div>
                                        </div>
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

export default ListViewAnioLectivo;