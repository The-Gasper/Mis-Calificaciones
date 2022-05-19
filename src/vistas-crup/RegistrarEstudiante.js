import React from 'react';

function RegistrarEstudiante(){
    return(

        <React.Fragment>
            <div class="section section-lg pt-4">
                <div class="container">
                    <div class="row mb-4 mb-lg-5">
                    
                        <div class="col-lg-8 col-sm-6">  
                            <fieldset disabled>                                                
                                <div class="form-group">
                                    <label for="disabledTextInput">ID</label>
                                    <input type="number" id="disabledTextInput" class="form-control" placeholder="ID"/>
                                 </div>
                            </fieldset> 

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
                                <legend class="h6">Correo Electronico * </legend>
                                <input type="email" class="form-control" id="exampleInputEmail67" aria-describedby="emailHelp"/>
                                
                            </div>
                            <div class="form-group">
                                <legend class="h6">Dirección * </legend>
                                <textarea class="form-control" placeholder="Ingrese la Dirreción" id="exampleFormControlTextarea1" rows="4"></textarea>
                            </div>
                            <div class="form-group">
                                <button type="submit" class="btn btn-block btn-primary">Registrar</button> 
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default RegistrarEstudiante;