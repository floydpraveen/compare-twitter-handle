import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Main from '../components/Main';
import Home from '../components/Home';
import ScreenNameContainer from '../containers/ScreenNameContainer';
import ShowUserDetailsContainer from '../containers/ShowUserDetailsContainer';
import ResultsContainer from '../containers/ResultsContainer';

var routes = (
    <Router history={hashHistory}>
     <Route path='/' component={Main}>
        <IndexRoute component={Home} />
        <Route path='twitterHandleOne' header='Twitter User One' component={ScreenNameContainer} />
        <Route path='twitterHandleTwo/:twitterHandleOne' header='Twitter User Two' component={ScreenNameContainer} />
        <Route path='showUserDetails' component={ShowUserDetailsContainer} />
        <Route path='results' component={ResultsContainer} />
     </Route>
    </Router>
);
module.exports = routes;
