
import React, { Component } from 'react'

class Planos extends Component {

    render() {
        return (
            <div  className="jumbotron jumbotron-fluid" style={{ backgroundColor: 'blue', marginBottom: '0rem' }}>
                <div className="container">
                    <h1 className="text-center" style={{ color: 'white' }}>PLANOS</h1>
                    <div className="row">
                    <div className="col-sm-4">
                            <div className="card my-3">
                                <div className="card-body">
                                    <h4 className="card-title"><b>FaleMais 30</b></h4>
                                    <h5 className="card-text" style={{color: 'blue'}}>30 minutos</h5>
                                    <hr/>
                                    <button className="btn btn-primary my-4 my-sm-0" type="submit">Mais informações</button>
                                </div>
                            </div>
                    </div>
                    <div className="col-sm-4">
                            <div className="card my-3">
                                <div className="card-body">
                                    <h4 className="card-title"><b>FaleMais 60</b></h4>
                                    <h5 className="card-text" style={{color: 'blue'}}>30 minutos</h5>
                                    <hr/>
                                    <button className="btn btn-primary my-4 my-sm-0" type="submit">Mais informações</button>
                                </div>
                            </div>
                    </div>
                    <div className="col-sm-4">
                            <div className="card my-3">
                                <div className="card-body">
                                    <h4 className="card-title"><b>FaleMais 120</b></h4>
                                    <h5 className="card-text" style={{color: 'blue'}}>30 minutos</h5>
                                    <hr/>
                                    <button className="btn btn-primary my-4 my-sm-0" type="submit">Mais informações</button>
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