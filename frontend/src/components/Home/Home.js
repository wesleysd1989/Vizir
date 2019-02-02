
import React, { Component } from 'react'

import { Menu, Intro, Planos} from '../../views'

class Home extends Component {

  render() {
    return (
      <div>
        <Menu/>
        <Intro/>
        <Planos/>
      </div>
    );
  }
}

export default Home

