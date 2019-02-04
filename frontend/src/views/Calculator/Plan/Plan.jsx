
import React, { Component } from 'react'

import etapas from '../../../assets/etapas1.png'

class Plan extends Component {

    constructor(props) {
        super(props)
        this.state = {
            plan30: false,
            plan60: false,
            plan120: false,
        }
    }

    plan30() {
        this.setState({plan30: true, plan60: false, plan120: false})
    }
    plan60(){
        this.setState({plan30: false, plan60: true, plan120: false})
    }
    plan120(){
        this.setState({plan30: false, plan60: false, plan120: true})
    }

    render() {
        return (
            <div>
                <div className="text-center mb-5 text-white" style={{ backgroundColor: 'blue', height: '80px' }}>
                    <h1 style={{ paddingTop: '15px' }}>Qual Seu Plano?</h1>
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
                                <div className="card my-3 rounded-0" style={{height: '160px'}} onClick={(e) => { this.plan30()}}>
                                    <div className="card-body">
                                        <div className="row mt-4">
                                            <div className="col-2 mx-2" style={{ top: '15px' }}>
                                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                            </div>
                                            <div className="col-10 mx-3">
                                                <h4 className="card-title"><b>FaleMais 30</b></h4>
                                                <h5 className="card-text" style={{ color: 'blue' }}>30 minutos</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="card my-3 rounded-0" style={{height: '160px'}} onClick={(e) => { this.plan60()}}>
                                    <div className="card-body">
                                        <div className="row mt-4">
                                            <div className="col-2 mx-2" style={{ top: '15px' }}>
                                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                            </div>
                                            <div className="col-10 mx-3">
                                                <h4 className="card-title"><b>FaleMais 60</b></h4>
                                                <h5 className="card-text" style={{ color: 'blue' }}>60 minutos</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="card my-3 rounded-0" style={{height: '160px'}} onClick={(e) => { this.plan120()}}>
                                    <div className="card-body">
                                    <div className="row mt-4">
                                            <div className="col-2 mx-2" style={{ top: '15px' }}>
                                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked={this.state.plan120}/>
                                            </div>
                                            <div className="col-10 mx-3">
                                                <h4 className="card-title"><b>FaleMais 120</b></h4>
                                                <h5 className="card-text" style={{ color: 'blue' }}>120 minutos</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mb-2" style={{ backgroundColor: 'white', height: '80px' }}>
                    <div className="float-left">
                        <a className="btn btn-primary" href="/#" role="button">Voltar</a>
                    </div>
                    <div className="float-right">
                        <a className="btn btn-primary" href="#/calc/info" role="button">Proxima etapa ></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Plan