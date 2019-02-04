
import React, { Component } from 'react'

import { Menu, CalcView, Footer } from '../../views'

class Calculator extends Component {

  render() {
    return (
      <div>
        <Menu />
        <CalcView/>
        <Footer />
      </div>
    );
  }
}

export default Calculator

