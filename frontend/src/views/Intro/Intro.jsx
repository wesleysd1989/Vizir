
import React, { Component } from 'react'

import introImg from '../../assets/intro.png'

class Intro extends Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="py-5"></div>
                        <div className="py-5" style={{width: '400px'}}>
                            <h1>Só na telzir você fala mais por menos.</h1>
                            <a className="btn btn-primary" href="#/calc" role="button">Calcule e saiba mais</a>
                        </div>
                    </div>
                    <div className="col-md-6" style={{width: '570px', height: '400px' }}>
                        <img src={introImg} className="card-img-top" alt="intro" />
                    </div>
                </div>
            </div>
        )
    }
}
export default Intro