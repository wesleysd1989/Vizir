
import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom';

import { Menu, Plan, Info, Footer } from '../../views'

class Home extends Component {

  render() {
    return (
      <div>
        <Menu />
        <HashRouter>
          <Switch>
            <Route exact path="/calc/plan" name="Plan Page" component={Plan} />
            <Route exact path="/calc/info" name="Information Page" component={Info} />
          </Switch>
        </HashRouter>
        <Footer />
      </div>
    );
  }
}

export default Home

