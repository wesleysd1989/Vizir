
import React, { Component } from 'react'

import logo from '../../assets/logo.png'

class Menu extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand mb-0 h1" href="/#">
                    <img src={logo} width="30" height="30" className="d-inline-block align-top mx-1" alt="logo"/>
                    telzir</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <a className="nav-link mx-2" href="#/calc/plan">Calculadora</a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link disabled mx-2" href="/#" tabIndex="-1" aria-disabled="true">Atendimento</a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link disabled mx-2" href="/#" tabIndex="-2" aria-disabled="true">Serviços</a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link disabled mx-2" href="/#" tabIndex="-3" aria-disabled="true">Contato</a>
                                </li>
                                <button className="btn btn-primary my-2 my-sm-0" disabled type="submit">Cadastre-se</button>
                            </ul>
                        </form>
                    </div>
                </div>
            </nav>
        )
    }
}
export default Menu