import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux'
import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'
import * as serviceWorker from './serviceWorker';

// Componentes
import { Home, Calculator } from './components';

import reducers from './reducers/'

//style
import './css/style.css'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers, devTools)
ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route exact path="/" name="Home Page" component={Home} />
                <Route exact path="/calc/plan" name="Plan Page" component={Calculator} />
                <Route exact path="/calc/info" name="Info Page" component={Calculator} />
                <Route exact path="/calc/result" name="Result Page" component={Calculator} />
                <Redirect from="/*" to="/" />
            </Switch>
        </HashRouter>
    </Provider>
    , document.getElementById('root'));
serviceWorker.unregister();
