import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getisAuthenticated } from '../redux/auth/auth-selectors';

export default function PrivateRoute({ redirectTo, children, ...routeProps }) {
  const isAuthenticated = useSelector(getisAuthenticated);

  return (
    <Route {...routeProps}>
      {isAuthenticated ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}
