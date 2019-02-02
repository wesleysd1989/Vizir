
import React, { Component } from 'react'

import { Menu, Plan, Footer } from '../../views'

class Home extends Component {

  render() {
    return (
      <div>
        <Menu/>
        <Plan/>
        <Footer/>
      </div>
    );
  }
}

export default Home

