
import React, { Component } from 'react'

import calc from '../../assets/calc.png'

class Calc extends Component {

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 bg-light" style={{ height: '400px' }}>
                        <div className="py-5"></div>
                        <div className=" py-5 text-center">
                            <h1>Calcule com tranparência</h1>
                            <a className="btn btn-primary" href="#/calc" role="button" style={{width: '200px'}}>Calcular</a>
                        </div>
                    </div>
                    <div className="col-md-6 " style={{ height: '400px' }}>
                        <div className="py-5"></div>
                        <div className="text-center">
                            <img src={calc} className="d-inline-block align-top" alt="calc" />
                            <br />
                            <p><b>Calcule seus gastos com transparência</b></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Calc