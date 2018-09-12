import React from 'react'
import MainView from './components/MainView/MainView';
import { Route, Switch } from 'react-router-dom';
import StudioTracker from './components/Project/StudioTracker';
import Spootify from './components/Project/Spootify';
import D2HReports from './components/Project/D2HReports';


export default (
    <Switch>
        <Route exact path='/' component={MainView} />
        <Route path='/project/studiotracker' component={StudioTracker} />
        <Route path='/project/spootify' component={Spootify} />
        <Route path='/project/d2hreports' component={D2HReports} />
    </Switch>
)