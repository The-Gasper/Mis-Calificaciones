import React from 'react';

function Loguin (){
    return(
        <React.Fragment>
        <main>
       
        <section class="min-vh-100 d-flex bg-primary align-items-center">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-md-8 col-lg-6 justify-content-center">
                        <div class="card bg-primary shadow-soft border-light p-4">
                            <div class="card-header text-center pb-0">
                                <h2 class="h4">Iniciar Seción en la Plantafoma</h2>  
                            </div>
                            <div class="card-body">
                                <form action="#" class="mt-4">
                                    
                                    <div class="form-group">
                                        <label for="exampleInputIcon3"> Usuario </label>
                                        <div class="input-group mb-4">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text"><span class="fas fa-envelope"></span></span>
                                            </div>
                                            <input class="form-control" id="exampleInputIcon3" placeholder="Ingresar Usuario" type="text" aria-label="email adress"/>
                                        </div>
                                    </div>
                                    
                                    <div class="form-group">
                                        
                                        <div class="form-group">
                                            <label for="exampleInputPassword6">Contraceña</label>
                                            <div class="input-group mb-4">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text"><span class="fas fa-unlock-alt"></span></span>
                                                </div>
                                                <input class="form-control" id="exampleInputPassword6" placeholder="Ingresar Contraceña" type="password" aria-label="Password" required/>
                                            </div>
                                        </div>
                                       
                                        <div class="d-block d-sm-flex justify-content-between align-items-center mb-4">
                                            
                                        </div>
                                    </div>
                                    <button type="submit" class="btn btn-block btn-primary">Iniciar Seción</button>
                                </form>
                                                                
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