import React from 'react';

function FormsCalificacion(){
    return(

<React.Fragment>
<div class="col-md-4"> 
        <button type="button" class="btn btn-block btn-primary mb-4" data-toggle="modal" data-target="#modal-form-Calificación">
        Agregar Calificación</button>
        
        <div class="modal fade" id="modal-form-Calificación" tabindex="-1" role="dialog" aria-labelledby="modal-form" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-body p-0">
                        <div class="card bg-primary shadow-soft border-light p-4">
                            <button type="button" class="close ml-auto" data-dismiss="modal" aria-label="Close">
                                <span calss="danger-text" aria-hidden="true">X</span>
                            </button>
                            <div class="card-header text-center pb-0">
                                <h2 class="h4">Calificación</h2>
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
                                    <legend class="h6">Seleccionar Actividad * </legend>
                                    <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                                        <option selected> Seleccione Actividad</option>
                                        <option value="1">Actividad A</option>
                                        <option value="2">Actividad B</option>
                                        <option value="3">Actividad C</option>
                                    </select>
                                </div> 
                                <div class="form-group">
                                    <legend class="h6">Seleccionar Estudiante * </legend>
                                    <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                                        <option selected> Seleccionar Estudiante</option>
                                        <option value="1">Est. Adrian Cabrera A</option>
                                        <option value="2">Est. Daniel FFFFF</option>
                                        <option value="3">Est. Luis AAAAA</option>
                                    </select>
                                </div> 
                                <div class="form-group">
                                    <label class="h6" for="exampleInputDate1">Fecha de Actividad</label>
                                    <div class="input-group mb-4">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text"><span class="far fa-calendar-alt"></span></span>
                                        </div>
                                        <input class="form-control datepicker" id="exampleInputDate1" placeholder="Seleccionar una Fecha" type="text" aria-label="Date with icon left"/>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <legend class="h6">Descripción * </legend>
                                    <textarea class="form-control" placeholder="Ingrese la Descripción de la Actividad" id="exampleFormControlTextarea1" rows="4"></textarea>
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

export default FormsCalificacion;