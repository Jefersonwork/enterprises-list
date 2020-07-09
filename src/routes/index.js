import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { isAuthenticated } from './Auth';

import SignIn from '~/pages/SignIn';
import Dashboard from '~/pages/Dashboard';
import Internal from '~/pages/Internal';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <PrivateRoute path="/Dashboard" component={Dashboard} />
        <PrivateRoute path="/internal/:id" component={Internal} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
