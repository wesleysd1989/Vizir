
import React, { Component } from 'react'

import etapas from '../../../assets/etapas1.png'

class Plan extends Component {

    render() {
        return (
            <div>
                <div className="text-center mb-5 text-white" style={{ backgroundColor: 'blue', height: '80px' }}>
                    <h1>Qual Seu Plano?</h1>
                </div>
                <div className="row">
                    <div className="col-md-4">
                    </div>
                    <div className="text-center mb-5 col-md-4">
                        <img src={etapas} className="card-img-top" alt="etapas" />
                    </div>
                    <div className="col-md-4">
                    </div>
                </div>
                <div className="jumbotron jumbotron-fluid my-0 mb-5" style={{ backgroundColor: 'blue' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="card my-3 rounded-0">
                                    <div className="card-body">
                                        <h4 className="card-title"><b>FaleMais 30</b></h4>
                                        <h5 className="card-text" style={{ color: 'blue' }}>30 minutos</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="card my-3 rounded-0">
                                    <div className="card-body">
                                        <h4 className="card-title"><b>FaleMais 60</b></h4>
                                        <h5 className="card-text" style={{ color: 'blue' }}>60 minutos</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="card my-3 rounded-0">
                                    <div className="card-body">
                                        <h4 className="card-title"><b>FaleMais 120</b></h4>
                                        <h5 className="card-text" style={{ color: 'blue' }}>120 minutos</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mb-2" style={{ backgroundColor: 'white', height: '80px' }}>
                    <div className="float-right">
                        <a className="btn btn-primary" href="#/calc" role="button">Proxima etapa ></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Plan