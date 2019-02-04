
import React, { Component } from 'react'

import etapas from '../../../assets/etapas2.png'

class Info extends Component {

    render() {
        return (
            <div>
                <div className="text-center mb-5 text-white" style={{ backgroundColor: 'blue', height: '80px' }}>
                    <h1 style={{paddingTop: '15px'}}>Informações</h1>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4">
                        </div>
                        <div className="text-center mb-5 col-md-4">
                            <img src={etapas} className="card-img-top" alt="etapas" />
                        </div>
                        <div className="col-md-4">
                        </div>
                    </div>
                </div>
                <div className="jumbotron jumbotron-fluid my-0 mb-5" style={{ backgroundColor: 'blue', height: '250px' }}>
                    <div className="d-flex justify-content-center mt-3">
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-8">
                                <form>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <small><b>DDD Origem</b></small>
                                            <input type="number" className="form-control" placeholder="11" />
                                        </div>
                                        <div className="col-md-4">
                                            <small><b>DDD Destino</b></small>
                                            <input type="number" className="form-control" placeholder="18" />
                                        </div>
                                        <div className="col-md-4">
                                            <small><b>Tempo de chamada</b></small>
                                            <input type="number" className="form-control" placeholder="30" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                    </div>
                </div>
                <div className="container mb-2" style={{ backgroundColor: 'white', height: '80px' }}>
                    <div className="float-left">
                        <a className="btn btn-primary" href="#/calc/plan" role="button">Voltar</a>
                    </div>
                    <div className="float-right">
                        <a className="btn btn-primary" href="#/calc/result" role="button">Proxima etapa ></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Info