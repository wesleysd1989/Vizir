
import React, { Component } from 'react'

import { Menu, Intro, Planos, Calc, Citacao, Footer } from '../../views'

class Home extends Component {

  render() {
    return (
      <div>
        <Menu/>
        <Intro/>
        <Planos/>
        <Calc/>
        <Citacao/>
        <Footer/>
      </div>
    );
  }
}

export default Home

