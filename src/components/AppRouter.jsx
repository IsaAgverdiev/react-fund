import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { privateRoutes, publicRoutes } from './router/Routes';

const AppRouter = () => {
  const isAuth = true;

  return isAuth ? (
    <Switch>
      {privateRoutes.map(route => (
        <Route key={route.path} component={route.component} exact={route.exact} path={route.path} />
      ))}
      <Redirect to='/posts' />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map(route => (
        <Route key={route.path} component={route.component} exact={route.exact} path={route.path} />
      ))}
      <Redirect to='/login' />
    </Switch>
  );
};

export default AppRouter;
