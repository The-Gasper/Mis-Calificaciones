import React, {useState} from 'react';

import {Formik, Form, Field, ErrorMessage} from 'formik';

function Loguin (){

    const [FormularioEnviado, CambiarFormularioEnviado] = useState(false);

    return(
        <React.Fragment>
<main>

    <section className="min-vh-100 d-flex bg-primary align-items-center">
        <div className="container">
        
            { FormularioEnviado && <div class="alert alert-success alert-dismissible shadow-soft fade show" role="alert">
                <span className="alert-inner--icon"><span class="far fa-thumbs-up"></span></span>
                <span className="alert-inner--text"><strong>Exito !!</strong> 
                Formulario enviado Correctamente</span>
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div> }

            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6 justify-content-center">
                    <div className="card bg-primary shadow-soft border-light p-4">
                        <div className="card-header text-center pb-0">
                            <h2 className="h4">Iniciar Seción en la Plantafoma</h2>  
                        </div>
                        <div className="card-body">
                        
                            <Formik
                            initialValues={{
                                usuario: '',
                                pass: ''

                            }}

                            validate={(valores)=>{
                            let errores={};
                                // Validacion para los numeros 
                                if(!valores.usuario){
                                   errores.usuario = 'Porfavor ingresa un usuario';
                                //   console.log(errores.usuario)
                                }else if(/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.usuario)){
                                    errores.usuario='El usuario solo puede numeros';
                                //    console.log(errores.usuario)
                                }

                                // validacion para pass caja bacia
                                if(!valores.pass){
                                   errores.pass = 'Porfavor ingresa una contraceña';
                                //   console.log(errores.usuario)
                                }

                                return errores;
                            }
                                }
                            onSubmit={ (valores, {resetForm}) => (
                                console.log(valores),
                                resetForm(),
                                CambiarFormularioEnviado(true),
                                setTimeout(() => CambiarFormularioEnviado(false), 3000)
                            ) }
                            >

                            {({  errors, touched})=>(
                                <Form action="#" className="mt-4" > 
                                    <div className="form-group">
                                        <label for="exampleInputIcon3"> Usuario </label>
                                        <div className="input-group mb-4">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><span class="fas fa-user"></span></span>
                                            </div>
                                            <Field 
                                                className="form-control" 
                                                id="usuario" 
                                                name="usuario" 
                                                placeholder="Ingresar Usuario" 
                                                type="text" 
                                                aria-label="Usuario" 
                                                />
                                        </div>
                                        {touched.usuario && errors.usuario && <div className="text-danger" > {errors.usuario}</div> }
                                    </div>
                                    <div className="form-group">
                                        <div className="form-group">
                                            <label for="exampleInputPassword6">Contraceña</label>
                                            <div className="input-group mb-4">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><span class="fas fa-unlock-alt"></span></span>
                                                </div>
                                                <Field 
                                                    className="form-control" 
                                                    id="pass" 
                                                    name="pass" 
                                                    placeholder="Ingresar Contraceña" 
                                                    type="password" 
                                                    aria-label="Password"                               
                                                />
                                            </div>
                                            <ErrorMessage name="pass" component={() => (
                                                <div className="text-danger" > {errors.pass}</div>  )}/>
                    
                                        </div>
                                        <div className="d-block d-sm-flex justify-content-between align-items-center mb-4">   
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-block btn-primary">Iniciar Seción</button>
                                </Form>
                            )}
                                
                            </Formik>     
                                                       
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>
</React.Fragment>
    );
};

export default Loguin;