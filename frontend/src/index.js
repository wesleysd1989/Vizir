import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

// Componentes
import { Home, Calculator } from './components';

//style
import './css/style.css'

ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route exact path="/" name="Home Page" component={Home} />
            <Route exact path="/calc/plan" name="Plan Page" component={Calculator} />
            <Route exact path="/calc/info" name="Info Page" component={Calculator} />
            <Route exact path="/calc/result" name="Result Page" component={Calculator} />
            <Redirect from="/*" to="/" />
        </Switch>
    </HashRouter>
    , document.getElementById('root'));
serviceWorker.unregister();
