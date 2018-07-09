import React from 'react'
import MainView from './components/MainView/MainView';
import { Route, Switch } from 'react-router-dom';
import StudioTracker from './components/Project/StudioTracker';
import Spootify from './components/Project/Spootify';


export default (
    <Switch>
        <Route exact path='/' component={MainView} />
        <Route path='/project/studiotracker' component={StudioTracker} />
        <Route path='/project/spootify' component={Spootify} />
    </Switch>
)