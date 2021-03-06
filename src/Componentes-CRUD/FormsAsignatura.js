import React from 'react';

function FormsAsignatura(){
    return(

        <React.Fragment>
        <div class="col-md-4"> 
                <button type="button" class="btn btn-block btn-primary mb-4" data-toggle="modal" data-target="#modal-form-Asignatura">
                Registrar Asignatura</button>
                
                <div class="modal fade" id="modal-form-Asignatura" tabindex="-1" role="dialog" aria-labelledby="modal-form" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-body p-0">
                                <div class="card bg-primary shadow-soft border-light p-4">
                                    <button type="button" class="close ml-auto" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">X</span>
                                    </button>
                                    <div class="card-header text-center pb-0">
                                        <h2 class="h4">Asignatura</h2>
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
                                            <legend class="h6">Asignatura * </legend>
                                            <div class="form-group">                                                    
                                                <input type="Text" id="TextInput" class="form-control" placeholder="Ingrese Nombre de la Asignatura" required/>
                                            </div>
                                        </div>
                                        
                                        <div class="form-group">
                                            <legend class="h6">Seleccionar Curso-Paralelo * </legend>
                                            <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                                                <option selected> Seleccione Curso</option>
                                                <option value="1">Actavo A</option>
                                                <option value="2">Noveno</option>
                                                <option value="3">Decimo</option>
                                            </select>
                                        </div> 
                                        <div class="form-group">
                                            <legend class="h6">Seleccionar Docente * </legend>
                                            <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                                                <option selected> Seleccione Docente</option>
                                                <option value="1"> Fernades Enrriques </option>
                                                <option value="2">XXXXXXXXX</option>
                                                <option value="3">YYYYYYYYY</option>
                                            </select>
                                        </div> 
                                        <div class="row mb-5">
                                                <div class="col-lg-3 col-md-6">
                                                    <div class="mb-3">
                                                        <span class="h6 font-weight-bold">Estado</span>
                                                    </div>
                                                    <div class=" form-check square-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck222"/>
                                                    <label class="form-check-label" for="defaultCheck222"></label>                                             
                                                    </div>
                                                </div>
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

export default FormsAsignatura;