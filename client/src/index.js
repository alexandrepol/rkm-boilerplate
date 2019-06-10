import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";

import * as serviceWorker from './serviceWorker';

import './assets/styles/main.scss';

import BasicLayout from './layouts/BasicLayout';

import GeneralContainer from './containers/General/GeneralContainer';
import AboutContainer from './containers/About/AboutContainer';

ReactDOM.render(
    <Router>
        <BasicLayout>
            <Route exact path="/" component={GeneralContainer} />
            <Route exact path="/about" component={AboutContainer} />
        </BasicLayout>
    </Router>,
    document.getElementById('root')
);

serviceWorker.register();
