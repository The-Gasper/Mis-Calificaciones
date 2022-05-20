import React from 'react';

function FormsEstudiante(){
    return(

        <React.Fragment>
        <div class="col-md-4"> 
                <button type="button" class="btn btn-block btn-primary mb-4" data-toggle="modal" data-target="#modal-form-Estudiante">
                Registrar Estudiante</button>
                
                <div class="modal fade" id="modal-form-Estudiante" tabindex="-1" role="dialog" aria-labelledby="modal-form" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-body p-0">
                                <div class="card bg-primary shadow-soft border-light p-4">
                                    <button type="button" class="close ml-auto" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                    <div class="card-header text-center pb-0">
                                        <h2 class="h4">Estudiante</h2>
                                        <span>Campos obligatorios * </span>   
                                    </div>
                                    <div class="card-body">
                                        <form action="#" class="mt-4">
                                        <fieldset disabled>                                                
                                            <div class="form-group">
                                                <label for="disabledTextInput">ID</label>
                                                <input type="number" id="disabledTextInput" class="form-control" placeholder="ID"/>
                                            </div>
                                        </fieldset> 
                                        <div class="form-group">                                                
                                            <legend class="h6">Cédula * </legend>
                                            <div class="form-group">                                                    
                                                <input type="number" id="NumberInput" class="form-control" placeholder="Ingrese la Cédula" required/>
                                            </div>
                                        </div> 
                                        <div class="form-group">                                                
                                            <legend class="h6">Nombres * </legend>
                                            <div class="form-group">                                                    
                                                <input type="text" id="TextInput" class="form-control" placeholder="Ingrese los Nombres" required/>
                                            </div>
                                        </div>  
                                        <div class="form-group">                                                
                                            <legend class="h6">Apellidos * </legend>
                                            <div class="form-group">                                                    
                                                <input type="text" id="TextInput" class="form-control" placeholder="Ingrese los Apellidos" required/>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <legend class="h6">Seleccionar Curso-Paralelo * </legend>
                                            <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                                                <option selected> Seleccione</option>
                                                <option value="1">Actavo A</option>
                                                <option value="2">Noveno</option>
                                                <option value="3">Decimo</option>
                                            </select>
                                        </div> 
                                        <div class="form-group">                                                
                                            <legend class="h6">Teléfono * </legend>
                                            <div class="form-group">                                                    
                                                <input type="number" id="NumberInput" class="form-control" placeholder="Ingrese el Numero de Teléfono" aria-label="email adress" required/>
                                            </div>
                                        </div>                       
                                        <div class="form-group">
                                            <legend class="h6">Correo Electrónico * </legend>
                                            <input type="email" class="form-control" id="exampleInputEmail67" aria-describedby="emailHelp"/>
                                            
                                        </div>
                                        <div class="form-group">
                                            <legend class="h6">Dirección * </legend>
                                            <textarea class="form-control" placeholder="Ingrese la Dirreción" id="exampleFormControlTextarea1" rows="4"></textarea>
                                        </div>
                                            
                                            <button type="submit" class="btn btn-block btn-primary">Registrar</button>                                            
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </React.Fragment>
    );
};

export default FormsEstudiante;