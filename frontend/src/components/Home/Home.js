
import React, { Component } from 'react'

import { Menu, Intro, Planos, Calc, Citacao } from '../../views'

class Home extends Component {

  render() {
    return (
      <div>
        <Menu/>
        <Intro/>
        <Planos/>
        <Calc/>
        <Citacao/>
      </div>
    );
  }
}

export default Home

