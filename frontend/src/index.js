import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

// Componentes
import { Home } from './components';

ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route exact path="/" name="Home Page" component={Home} />
            <Redirect from="/*" to="/" />
        </Switch>
    </HashRouter>
    , document.getElementById('root'));
serviceWorker.unregister();
