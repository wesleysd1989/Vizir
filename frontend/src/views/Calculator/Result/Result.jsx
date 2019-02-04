
import React, { Component } from 'react'

import etapas from '../../../assets/etapas3.png'

class Result extends Component {

    render() {
        return (
            <div>
                <div className="text-center mb-5 text-white" style={{ backgroundColor: 'blue', height: '80px' }}>
                    <h1 style={{paddingTop: '15px'}}>Resultado</h1>
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
                <table className="table table-striped text-center container mb-5">
                    <thead>
                        <tr className="bg-primary text-light">
                            <th>DDD Origem</th>
                            <th>DDD Destino</th>
                            <th>Tempo</th>
                            <th>Plano</th>
                            <th>Com Plano</th>
                            <th>Sem Plano</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                s
                            </td>
                            <td>
                                ss
                            </td>
                            <td>
                                ss
                            </td>
                            <td>
                                ss
                            </td>
                            <td>
                                ss
                            </td>
                            <td>
                                ss
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="container mb-2" style={{ backgroundColor: 'white', height: '80px', paddingRight: '0px' }}>
                    <div className="float-right">
                        <a className="btn btn-primary" href="/#" role="button">Voltar</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Result