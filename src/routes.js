import React from 'react';
import { Switch, Route } from 'react-router-dom';
import WeatherScreen from './screens/Weather';

const Routes = () => (
  <Switch>
    <Route exact path='/' component={ WeatherScreen } />
  </Switch>
)

export default Routes;