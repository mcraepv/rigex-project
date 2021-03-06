import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import routePaths from './constants/routePaths';
import { Landing, Login, SignUp, VitalResources, RigScheduler } from './pages';
export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route path={routePaths.landing} component={Landing} />
        <Route exact path={routePaths.login} component={Login} />
        <Route exact path={routePaths.signUp} component={SignUp} />
        <Route exact path={routePaths.vital} component={VitalResources} />
        <Route exact path={routePaths.rigScheduler} component={RigScheduler} />
        <Redirect from="*" to={routePaths.landing} />
      </Switch>
    );
  }
}
