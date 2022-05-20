import React from 'react';

function FormsCurso () {
    return(
        <React.Fragment>
                <div class="col-md-4">
                
                <button type="button" class="btn btn-block btn-primary mb-4" data-toggle="modal" data-target="#modal-form-Curso">
                Agregar Curso</button>
                
                <div class="modal fade" id="modal-form-Curso" tabindex="-1" role="dialog" aria-labelledby="modal-form" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-body p-0">
                                <div class="card bg-primary shadow-soft border-light p-4">
                                    <button type="button" class="close ml-auto" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                    <div class="card-header text-center pb-0">
                                        <h2 class="h4">Curso</h2>
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
                                                <legend class="h6">Curso *</legend>
                                                    <div class="form-group">                                                    
                                                        <input type="text" id="TextInput" class="form-control" placeholder="Ingre el Curso" required/>
                                                    </div>
                                            </div>
                                            <div class="form-group">
                                                <legend class="h6">Seleccionar Paralelo * </legend>
                                                <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" >
                                                    <option selected> Seleccione el Paralelo</option>
                                                    <option value="1">A</option>
                                                    <option value="2">B</option>
                                                    <option value="3">C</option>
                                                    <option value="4">D</option>
                                                    <option value="5">E</option>
                                                    <option value="6">F</option>
                                                    <option value="7">G</option>
                                                    <option value="8">H</option>
                                                    <option value="9">I</option>
                                                </select>
                                            </div> 
                                            <div class="form-group">
                                                <legend class="h6">Seleccionar el Año Lectivo * </legend>
                                                <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" >
                                                    <option selected> Seleccione Año lectivo</option>
                                                    <option value="1">2020 - 2020</option>
                                                    <option value="2">2020 - 2021</option>
                                                    <option value="3">2021 - 2022</option>
                                                    
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

export default FormsCurso;