
import React, { Component } from 'react'

class Planos extends Component {

    render() {
        return (
            <div  className="jumbotron jumbotron-fluid my-0" style={{ backgroundColor: 'blue' }}>
                <div className="container">
                    <h1 className="text-center" style={{ color: 'white' }}>PLANOS</h1>
                    <div className="row">
                    <div className="col-sm-4">
                            <div className="card my-3 rounded-0">
                                <div className="card-body">
                                    <h4 className="card-title"><b>FaleMais 30</b></h4>
                                    <h5 className="card-text" style={{color: 'blue'}}>30 minutos</h5>
                                    <hr/>
                                    <button className="btn btn-primary my-4 my-sm-0" disabled type="submit">Mais informações +</button>
                                </div>
                            </div>
                    </div>
                    <div className="col-sm-4">
                            <div className="card my-3 rounded-0">
                                <div className="card-body">
                                    <h4 className="card-title"><b>FaleMais 60</b></h4>
                                    <h5 className="card-text" style={{color: 'blue'}}>60 minutos</h5>
                                    <hr/>
                                    <button className="btn btn-primary my-4 my-sm-0" disabled type="submit">Mais informações +</button>
                                </div>
                            </div>
                    </div>
                    <div className="col-sm-4">
                            <div className="card my-3 rounded-0">
                                <div className="card-body">
                                    <h4 className="card-title"><b>FaleMais 120</b></h4>
                                    <h5 className="card-text" style={{color: 'blue'}}>120 minutos</h5>
                                    <hr/>
                                    <button className="btn btn-primary my-4 my-sm-0" disabled type="submit">Mais informações +</button>
                                </div>
                            </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
export default Planos