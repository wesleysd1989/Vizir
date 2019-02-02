
import React, { Component } from 'react'

import citacao from '../../assets/citacao.png'

class Citacao extends Component {

    render() {
        return (
                <div className="imgBackground">
                    <img src={citacao} className="d-inline-block align-top img-fluid" alt="citacao" />
                </div>
        )
    }
}
export default Citacao