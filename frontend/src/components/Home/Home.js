
import React, { Component } from 'react'

import { Menu, Intro, Planos, Calc } from '../../views'

class Home extends Component {

  render() {
    return (
      <div>
        <Menu/>
        <Intro/>
        <Planos/>
        <Calc/>
      </div>
    );
  }
}

export default Home

