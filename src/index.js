import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import * as serviceWorker from './serviceWorker';
import Login from "./components/login/Login";
import Main from "./components/main/Main";

const routing = (
    <Router>
        <Route exact path="/" component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/main" component={Main} />
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();
