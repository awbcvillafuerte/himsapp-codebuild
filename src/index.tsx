import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import LoginPage from './Pages/Login/LoginPage';
import ProfilePage from './Pages/Profile';
import { createBrowserHistory } from 'history'

import { HashRouter as Router, Route, Switch } from 'react-router-dom';

const history = createBrowserHistory();

ReactDOM.render(
    <Router>
        <Switch>
            <Route path={'/profile'} render={() => <ProfilePage history={history} />} />
            <Route exact path={'/'} render={() => <LoginPage history={history} />} />
        </Switch>
    </Router>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

