import React from 'react';

function FormsAnioLectivo () {
    return(
<React.Fragment>
        <div class="col-md-4">
        
        <button type="button" class="btn btn-block btn-primary mb-4" data-toggle="modal" data-target="#modal-form-Anio-Lectivo">
        Agregar Año Lectivo</button>
        
        <div class="modal fade" id="modal-form-Anio-Lectivo" tabindex="-1" role="dialog" aria-labelledby="modal-form" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-body p-0">
                        <div class="card bg-primary shadow-soft border-light p-4">
                            <button type="button" class="close ml-auto" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                            <div class="card-header text-center pb-0">
                                <h2 class="h4">Año Lectivo</h2>
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
                                    
                                    <div class="input-daterange datepicker row align-items-center">
                                        <div class="col">
                                            <label class="h6" for="exampleInputDate2">Fecha de Inicio</label>
                                            <div class="form-group">
                                                <div class="input-group input-group-border">
                                                    <div class="input-group-prepend"><span class="input-group-text"><span class="far fa-calendar-alt"></span></span></div>
                                                    <input class="form-control datepicker" id="exampleInputDate2" placeholder="Inicio Fecha" type="text"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="form-group">
                                                <label class="h6" for="exampleInputDate3">Fecha de Finalización</label>
                                                <div class="input-group input-group-border">
                                                    <div class="input-group-prepend"><span class="input-group-text"><span class="far fa-calendar-alt"></span></span></div>
                                                    <input class="form-control datepicker" id="exampleInputDate3" placeholder="Fin Fecha" type="text"/>
                                                </div>
                                            </div>
                                        </div>
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

export default FormsAnioLectivo;