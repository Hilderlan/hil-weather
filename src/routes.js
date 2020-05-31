import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Weather from './components/Weather';

const Routes = () => (
  <Switch>
    <Route exact path='/' component={ Weather } />
  </Switch>
)

export default Routes;