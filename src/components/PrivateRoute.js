import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getisAuthenticated } from '../redux/auth/auth-selectors';

// export default function PrivateRoute({ redirectTo, children, ...routeProps }) {
//   const isAuthenticated = useSelector(getisAuthenticated);

//   return (
//     <Route {...routeProps}>
//       {isAuthenticated ? children : <Navigate to={redirectTo} />}
//     </Route>
//   );
// }

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isAuthenticated = useSelector(getisAuthenticated);

  return !isAuthenticated ? <Navigate to={redirectTo} /> : <Component />;
};
