
import React, { Component } from 'react'

import facebook from '../../assets/social-media/facebook.png'
import twitter from '../../assets/social-media/twitter.png'
import youtube from '../../assets/social-media/youtube.png'
import instagram from '../../assets/social-media/instagram.png'

class Footer extends Component {

    render() {
        return (
            <div>
                <div className="jumbotron jumbotron-fluid my-0" style={{ backgroundColor: 'black' }} >
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <span style={{ color: 'white' }}>MAPA DO SITE</span>
                                <ul>
                                    <li>
                                        <a href="/#" style={{ color: '#707070' }}>HOME</a>
                                    </li>
                                    <li>
                                        <a href="/#" style={{ color: '#707070' }}>ATENDIMENTO</a>
                                    </li>
                                    <li>
                                        <a href="/#" style={{ color: '#707070' }}>SERVIÇOS</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-sm-4">
                                <span style={{ color: 'white' }}>REDES SOCIAIS</span>
                                    <div className="row">
                                    <a className="mx-2 my-3" href="/#">
                                        <img src={facebook} width="49" height="49" alt="facebook" />
                                    </a>
                                    <a className="mx-2 my-3" href="/#">
                                        <img src={twitter} width="49" height="49" alt="twitter" />
                                    </a>
                                    <a className="mx-2 my-3" href="/#">
                                        <img src={youtube} width="49" height="49" alt="youtube" />
                                    </a>
                                    <a className="mx-2 my-3" href="/#">
                                        <img src={instagram} width="49" height="49" alt="intragram" />
                                    </a>                                    
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <span style={{ color: 'white' }}>SOBRE</span>
                                <p style={{ color: '#707070' }}><b>A telzir é uma empresa de telefonia criada para facilitar a vida de todos. Com ela você fala com todos sem burocracia e com transparência.</b></p>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="navbar navbar-light navbar-expand-lg" style={{ height: '70px', backgroundColor: 'blue' }}>
                    <div className="container">
                        <b style={{ color: 'white'}}>telzir 1993 - 2019 - Todos os direitos reservados</b>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Footer