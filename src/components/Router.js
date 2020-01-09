import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import App from '../App';
import About from './About';
import Podcast from '../Podcast';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={App} exact>
                <App/>
            </Route>
            <Route path="/about" component={About}>
                <About/>
            </Route>
            <Route path="/podcast" component={Podcast}>
                <Podcast/>
            </Route>
        </Switch>
    </BrowserRouter>
);

export default Router;