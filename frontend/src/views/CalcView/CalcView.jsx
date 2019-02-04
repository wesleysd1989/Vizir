
import React, { Component } from 'react'

class CalcView extends Component {

    constructor(props) {
        super(props)
        this.state = {
            result: true,
        }
    }

    render() {
        const result = this.state.result
        return (
            <div>
                <div className="text-center mb-5 text-white" style={{ backgroundColor: 'blue', height: '80px' }}>
                    <h1 style={{ paddingTop: '15px' }}>Calculadora</h1>
                </div>
                <div className="container my-5">
                    <form>
                        <div className="card">
                            <div className="card-header">
                                Informações do cálculo
                            </div>
                            <div className="card-body">
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="status">Escolha seu plano</label>
                                        <br />
                                        <div className="form-check form-check-inline">
                                            <input type="radio" name="plan" component="input" value="plan30" />
                                            <label className="form-check-label mx-1" htmlFor="plan30">
                                                FaleMais 30
                                            </label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input type="radio" name="plan" component="input" value="plan60" />
                                            <label className="form-check-label mx-1" htmlFor="plan60">
                                                FaleMais 60
                                            </label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input type="radio" name="plan" component="input" value="plan120" />
                                            <label className="form-check-label mx-1" htmlFor="plan120">
                                                FaleMais 120
                                        </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-2">
                                        <label htmlFor="address">DDD Origem</label>
                                        <input type="text" placeholder="11" className="form-control" id="origem" name="origem" />
                                    </div>
                                    <div className="form-group col-md-2">
                                        <label htmlFor="city">DDD Destino</label>
                                        <input type="text" placeholder="18" className="form-control" id="destino" name="destino" />
                                    </div>
                                    <div className="form-group col-md-2">
                                        <label htmlFor="province">Minutos</label>
                                        <input type="text" placeholder="120" className="form-control" id="minutos" name="minutos" />
                                    </div>
                                </div>
                            </div>
                            <div className="text-center my-3">
                                <a className="btn btn-primary" href="/#" role="button" style={{ width: '180px' }}>Calcular</a>
                            </div>
                        </div>
                    </form>
                </div>
                {result ?
                    <div>
                        <table className="table table-striped text-center container mb-5 my-5">
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
                                <a className="btn btn-primary" href="/#" role="button">Finalizar</a>
                            </div>
                        </div>
                    </div>
                    :
                    <div></div>
                }
            </div>
        )
    }
}

export default CalcView