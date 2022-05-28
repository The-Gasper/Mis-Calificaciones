import React, {useState} from 'react';

import ListAnioLectivo from'./ListAnioLectivo'


import {Formik, Form, Field ,ErrorMessage} from 'formik';

export function FormsAnioLectivo (props) {
    let color = '';
    let icon = '';

    let accion=props.children;
        if(props.children === 'Agregar'){
            color='success';
            icon = 'fa-plus';
            
        }else if(props.children === 'Modificar'){
            color='warning';
            icon = 'fa-file';


        }else if(props.children === 'Eliminar'){
            color='danger';
            icon = 'fa-thumbs-down';
        }


    const [FormularioEnviado, CambiarFormularioEnviado] = useState(false);
   

    return(
<React.Fragment>

        <div className="col-md-4">   
   
        <botton 
        type="button" 
        className={`btn btn-block btn-primary mb-4 text-${color}`.trimEnd()}  
        data-toggle="modal" 
        data-target="#modal-form-Anio-Lectivo"
        >
        <span class="mr-4"><span className={`fas ${icon}`}></span></span>
        {props.children}
        
        </botton>

       
                
        
        <div className="modal fade" id="modal-form-Anio-Lectivo" tabindex="-1" role="dialog" aria-labelledby="modal-form" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-body p-0">
                        <div className="card bg-primary shadow-soft border-light p-4">
                            <button type="button" className="close ml-auto" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                            { FormularioEnviado &&
                                <div class="alert alert-success alert-dismissible shadow-soft fade show" role="alert">
                                    <span className="alert-inner--icon"><span class="far fa-thumbs-up"></span></span>
                                    <span className="alert-inner--text"><strong>Exito !!</strong> 
                                    Formulario enviado Correctamente</span>
                                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div> } 

                            <div className="card-header text-center pb-0">
                                <h2 className="h4"> {props.children} Año Lectivo</h2>
                                <span>Campos obligatorios * </span>   
                            </div>
                            <div className="card-body">
                            <Formik
                            initialValues={{
                                id: '',
                                fecha_ini: '',
                                fecha_fin: '', 
                                estado: false

                            }}

                            validate={(valores)=>{
                            let errores={};
                                // Validacion para  caja bacia
                                if(!valores.fecha_ini){
                                   errores.fecha_ini = 'Ingresa una fecha de inicio';
                                //   console.log(errores.fecha_ini)
                                }

                                // validacion para  caja bacia
                                if(!valores.fecha_fin){
                                   errores.fecha_fin = 'Ingresa una fecha de final';
                                //   console.log(errores.fecha_fin)
                                }

                                return errores;
                            }
                                }
                         
                                onSubmit={ (valores, {resetForm}) => (
                                console.log(valores),
                                resetForm(),
                                CambiarFormularioEnviado(true),
                                setTimeout(() => CambiarFormularioEnviado(false), 3000)
                            ) } >

                            {({ errors, touched, values })=>(
                                <Form action="#" className="mt-4">
                                    <fieldset disabled>                                                
                                        <div className="form-group">
                                            <label for="disabledTextInput">ID</label>
                                            <input 
                                            type="number" 
                                            id="disabledTextInput" 
                                            className="form-control" 
                                            placeholder="ID"/>
                                        </div>
                                    </fieldset>

                                    <div className=" row align-items-center">
                                        <div className="col">
                                            <div className="form-group">
                                            <label className="h6" for="fecha_ini">Fecha de Inicio</label>
                                                <div className="input-group  ">
                                                    
                                                    <Field 
                                                        className="form-control " 
                                                        id="fecha_ini" 
                                                        name="fecha_ini" 
                                                        placeholder="Fecha de Inicio " 
                                                        type="date" 
                                                        aria-label="Fecha de Inicio" 
                                                        />
                                                </div>
                                                {touched.fecha_ini && errors.fecha_ini && <div className="text-danger" > {errors.fecha_ini}</div> }
                                            </div>
                                        </div>
                                        
                                        <div className="col">
                                            <div className="form-group">
                                            <label className="h6" for="fecha_fin">Fecha de Finalización</label>
                                                <div className="input-group i">
                                                    
                                                    <Field 
                                                        className="form-control" 
                                                        id="fecha_fin" 
                                                        name="fecha_fin" 
                                                        placeholder="Fecha de Finalisación " 
                                                        type="date" 
                                                        aria-label="Fecha de final" 
                                                        />
                                                </div>
                                                {touched.fecha_fin && errors.fecha_fin && <div className="text-danger" > {errors.fecha_fin}</div> }
                                            </div>      
                                        </div> 

                                    </div>   
                                    <div className="row mb-5">
                                        <div className="col-lg-3 col-md-6">
                                            
                                            <div className="mb-3">
                                                <span className="h6 font-weight-bold">Estado</span>
                                            </div>
                                            <div className=" form-check square-check col-4">
                                            <Field 
                                            className="form-check-input" 
                                            type="checkbox" 
                                            name ="estado" 
                                            id="estado"/>
                                            <label className="form-check-label" for="estado"> {`${(values.estado)? 'Activo' :'Inactivo'}`}</label>                                             
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-block btn-primary">{props.children}</button>                                            
                                </Form>
                                )}
                            </Formik>
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



 export function UpdateAnioLectivo (props) {
    let color = '';
    let icon = '';

 if(props.children === 'Modificar'){
            color='warning';
            icon = 'fa-file';
 }


    const [FormularioEnviado, CambiarFormularioEnviado] = useState(false);
   

    return(
<React.Fragment>
        


        <button 
            type="button" 
            className={`btn btn-primary text-${color}`.trimEnd()}  
            data-toggle="modal" 
            data-target="#modal-update-Anio-Lectivo">
            <span class="mr-1"><span className={`fas ${icon}`}></span></span>
            {props.children}
        </button>
        
        <div className="modal fade" id="modal-update-Anio-Lectivo" tabindex="-1" role="dialog" aria-labelledby="modal-form" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-body p-0">
                        <div className="card bg-primary shadow-soft border-light p-4">
                            <button type="button" className="close ml-auto" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                            { FormularioEnviado &&
                                <div class="alert alert-success alert-dismissible shadow-soft fade show" role="alert">
                                    <span className="alert-inner--icon"><span class="far fa-thumbs-up"></span></span>
                                    <span className="alert-inner--text"><strong>Exito !!</strong> 
                                    Formulario enviado Correctamente</span>
                                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div> } 

                            <div className="card-header text-center pb-0">
                                <h2 className="h4"> {props.children} Año Lectivo</h2>
                                <span>Campos obligatorios * </span>   
                            </div>
                            <div className="card-body">
                            <Formik
                            initialValues={{
                                id: '',
                                fecha_ini: '',
                                fecha_fin: '', 
                                estado: false

                            }}

                            validate={(valores)=>{
                            let errores={};
                                // Validacion para  caja bacia
                                if(!valores.fecha_ini){
                                   errores.fecha_ini = 'Ingresa una fecha de inicio';
                                //   console.log(errores.fecha_ini)
                                }

                                // validacion para  caja bacia
                                if(!valores.fecha_fin){
                                   errores.fecha_fin = 'Ingresa una fecha de final';
                                //   console.log(errores.fecha_fin)
                                }

                                return errores;
                            }
                                }
                         
                                onSubmit={ (valores, {resetForm}) => (
                                console.log(valores),
                                resetForm(),
                                CambiarFormularioEnviado(true),
                                setTimeout(() => CambiarFormularioEnviado(false), 3000)
                            ) } >

                            {({ errors, touched, values })=>(
                                <Form action="#" className="mt-4">
                                    <fieldset disabled>                                                
                                        <div className="form-group">
                                            <label for="disabledTextInput">ID</label>
                                            <input 
                                            type="number" 
                                            id="disabledTextInput" 
                                            className="form-control" 
                                            placeholder="ID"/>
                                        </div>
                                    </fieldset>

                                    <div className=" row align-items-center">
                                        <div className="col">
                                            <div className="form-group">
                                            <label className="h6" for="fecha_ini">Fecha de Inicio</label>
                                                <div className="input-group  ">
                                                    
                                                    <Field 
                                                        className="form-control " 
                                                        id="fecha_ini" 
                                                        name="fecha_ini" 
                                                        placeholder="Fecha de Inicio " 
                                                        type="date" 
                                                        aria-label="Fecha de Inicio" 
                                                        />
                                                </div>
                                                {touched.fecha_ini && errors.fecha_ini && <div className="text-danger" > {errors.fecha_ini}</div> }
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-group">
                                            <label className="h6" for="fecha_fin">Fecha de Finalización</label>
                                                <div className="input-group i">
                                                    
                                                    <Field 
                                                        className="form-control" 
                                                        id="fecha_fin" 
                                                        name="fecha_fin" 
                                                        placeholder="Fecha de Finalisación " 
                                                        type="date" 
                                                        aria-label="Fecha de final" 
                                                        />
                                                </div>
                                                {touched.fecha_fin && errors.fecha_fin && <div className="text-danger" > {errors.fecha_fin}</div> }
                                            </div>      
                                        </div> 

                                    </div>   
                                    <div className="row mb-5">
                                        <div className="col-lg-3 col-md-6">
                                            
                                            <div className="mb-3">
                                                <span className="h6 font-weight-bold">Estado</span>
                                            </div>
                                            <div className=" form-check square-check">
                                            <Field 
                                            className="form-check-input" 
                                            type="checkbox" 
                                            name ="estado" 
                                            id="estado"/>
                                            <label className="form-check-label" for="estado"> {`${(values.estado)? 'Activo' :'Inactivo'}`}</label>                                             
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-block btn-primary">{props.children}</button>                                            
                                </Form>
                                )}
                            </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     
  
</React.Fragment>
    );
};


export function DeleteAnioLectivo (props) {
    let color = '';
    let icon = '';

 if(props.children === 'Eliminar'){
            color='danger';
            icon = 'fa-thumbs-down';
 }


    const [FormularioEnviado, CambiarFormularioEnviado] = useState(false);
   

    return(
<React.Fragment>

    

                
                            <button 
                            type="button" 
                            className={`btn btn-primary text-${color}`.trimEnd()}  
                            data-toggle="modal" 
                            data-target="#modal-default">
                            <span class="mr-1"><span className={`fas ${icon}`}></span></span>
                            {props.children}
                            </button>

                           
 
                <div class="modal fade" id="modal-default" tabindex="-1" role="dialog" aria-labelledby="modal-default" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h2 class="h6 modal-title mb-0" id="modal-title-default">Eliminar</h2>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <p>Alerta</p>
                                <p>Caracteristica Principal</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-sm btn-primary">Eliminar</button>
                                <button type="button" class="btn btn-primary text-danger ml-auto" data-dismiss="modal">Cancelar</button>
                            </div>
                        </div>
                    </div>
                </div>

    
  
</React.Fragment>
    );
};

