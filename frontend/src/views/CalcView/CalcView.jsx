
import React, { Component } from 'react'

class CalcView extends Component {

    constructor(props) {
        super(props)
        this.state = {
            result: false,
            btnEnable: true,
            plan: '',
            origem: '',
            destino: '',
            minutos: '',
            comPlan: '',
            semPlan: '',
            data: [{"origem": 11, "destino": 16, "valorMin": 1.90},
                   {"origem": 16, "destino": 11, "valorMin": 2.90},
                   {"origem": 11, "destino": 17, "valorMin": 1.70},
                   {"origem": 17, "destino": 11, "valorMin": 2.70},
                   {"origem": 11, "destino": 18, "valorMin": 0.90},
                   {"origem": 18, "destino": 11, "valorMin": 1.90},]
        }
    }

    result() {
        const data = this.state.data
        const origemTest = parseInt(this.state.origem)
        const destinoTest = parseInt(this.state.destino)
        const valor = data.filter(valor => valor.origem === origemTest)
        const result = valor.find(result => result.destino === destinoTest)
        if(result !== undefined)
        {
            const withPlan = this.state.minutos * result.valorMin
            this.setState({semPlan: 'R$ '+ parseFloat(withPlan).toFixed(2)})
            switch(this.state.plan){
                case "FaleMais 30":
                    if(this.state.minutos < 30){
                        this.setState({comPlan: 'R$ '+ parseFloat(0).toFixed(2)})
                    }else{
                        const valor = this.state.minutos - 30
                        const perc = result.valorMin*(10/100) + result.valorMin
                        const resultado = valor * perc
                        this.setState({comPlan: 'R$ '+ parseFloat(resultado).toFixed(2)})
                    }
                    break
                case "FaleMais 60":
                    if(this.state.minutos < 60){
                        this.setState({comPlan: 'R$ '+ parseFloat(0).toFixed(2)})
                    }else{
                        const valor = this.state.minutos - 60
                        const perc = result.valorMin*(10/100) + result.valorMin
                        const resultado = valor * perc
                        this.setState({comPlan: 'R$ '+ parseFloat(resultado).toFixed(2)})
                    }
                    break
                case "FaleMais 120":
                    if(this.state.minutos < 120){
                        this.setState({comPlan: 'R$ '+ parseFloat(0).toFixed(2)})
                    }else{
                        const valor = this.state.minutos - 120
                        const perc = result.valorMin*(10/100) + result.valorMin
                        const resultado = valor * perc
                        this.setState({comPlan: 'R$ '+ parseFloat(resultado).toFixed(2)})
                    }
                    break
                default:
                    console.error('Erro ao escolher o plano')
            }
        }else{
            this.setState({comPlan: '-'})
            this.setState({semPlan: '-'})
        }
        this.setState({result: true})
    }

    verifyOrigem(value){
        if (value !== '' && this.state.destino !== '' && this.state.minutos !== '' && this.state.plan !== ''){
            this.setState({btnEnable: false})
            this.setState({result: false})
        }else{
            this.setState({btnEnable: true})
            this.setState({result: false})
        }
    }
    verifyDestino(value){
        if (this.state.origem !== '' && value !== '' && this.state.minutos !== '' && this.state.plan !== ''){
            this.setState({btnEnable: false})
            this.setState({result: false})
        }else{
            this.setState({btnEnable: true})
            this.setState({result: false})
        }
    }
    verifyMinutos(value){
        if (this.state.origem !== '' && this.state.destino !== '' && value !== '' && this.state.plan !== ''){
            this.setState({btnEnable: false})
            this.setState({result: false})
        }else{
            this.setState({btnEnable: true})
            this.setState({result: false})
        }
    }
    verifyPLan(value){
        if (this.state.origem !== '' && this.state.destino !== '' && this.state.minutos !== '' && value !== ''){
            this.setState({btnEnable: false})
            this.setState({result: false})
        }else{
            this.setState({btnEnable: true})
            this.setState({result: false})
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
                                            <input type="radio" name="plan" component="input" value="FaleMais 30" onChange={e => {this.setState({plan: e.target.value}); this.verifyPLan(e.target.value)}}/>
                                            <label className="form-check-label mx-1" htmlFor="plan30">
                                                FaleMais 30
                                            </label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input type="radio" name="plan" component="input" value="FaleMais 60" onChange={e => {this.setState({plan: e.target.value}); this.verifyPLan(e.target.value)}}/>
                                            <label className="form-check-label mx-1" htmlFor="plan60">
                                                FaleMais 60
                                            </label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input type="radio" name="plan" component="input" value="FaleMais 120" onChange={e => {this.setState({plan: e.target.value}); this.verifyPLan(e.target.value)}}/>
                                            <label className="form-check-label mx-1" htmlFor="plan120">
                                                FaleMais 120
                                        </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-2">
                                        <label htmlFor="address">DDD Origem</label>
                                        <input type="number" placeholder="11" className="form-control" id="origem" value={this.state.origem} name="origem" onChange={e => { const value = e.target.value.replace(/\+|-/ig, ''); this.setState({ origem: value }); this.verifyOrigem(e.target.value)}}/>
                                    </div>
                                    <div className="form-group col-md-2">
                                        <label htmlFor="city">DDD Destino</label>
                                        <input type="number" placeholder="18" className="form-control" id="destino" value={this.state.destino} name="destino" onChange={e => { const value = e.target.value.replace(/\+|-/ig, ''); this.setState({ destino: value }); this.verifyDestino(e.target.value)}}/>
                                    </div>
                                    <div className="form-group col-md-2">
                                        <label htmlFor="province">Minutos</label>
                                        <input type="number" placeholder="120" className="form-control" id="minutos" value={this.state.minutos} name="minutos" onChange={e => { const value = e.target.value.replace(/\+|-/ig, ''); this.setState({ minutos: value }); this.verifyMinutos(e.target.value)}}/>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center my-3">
                                <button className="btn btn-primary my-2 my-sm-0" disabled={this.state.btnEnable} type="button" onClick={(e) => {this.result()}} style={{width: '180px'}}>Calcular</button>
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
                                        {this.state.origem}
                                    </td>
                                    <td>
                                        {this.state.destino}
                                    </td>
                                    <td>
                                        {this.state.minutos}
                                    </td>
                                    <td>
                                        {this.state.plan}
                                    </td>
                                    <td>
                                        {this.state.comPlan}
                                    </td>
                                    <td>
                                        {this.state.semPlan}
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