
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
                            <button className="btn btn-primary my-2 my-sm-0" type="button">Calcule e saiba mais</button>
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