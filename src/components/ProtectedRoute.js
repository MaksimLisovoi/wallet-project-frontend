import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from '../redux/auth/auth-selectors';

const ProtectedRoute = ({ children, ...routeProps }) => {
  const isAuthenticated = useSelector(authSelectors.getisAuthenticated);

  return (
    <Route {...routeProps}>
      {isAuthenticated ? children : <Redirect to="/login" />}
    </Route>
  );
};

export default ProtectedRoute;
