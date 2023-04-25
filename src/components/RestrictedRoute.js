import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getisAuthenticated } from '../redux/auth/auth-selectors';

/**
 * - Если маршрут ограниченный, и пользователь залогинен, рендерит редирект на /todos
 * - В противном случае рендерит компонент
 */
// export default function PublicRoute({ redirectTo, children, ...routeProps }) {
//   const isAuthenticated = useSelector(getisAuthenticated);

//   return (
//     <Route {...routeProps}>
//       {isAuthenticated && routeProps.restricted ? (
//         <Navigate to={redirectTo} />
//       ) : (
//         children
//       )}
//     </Route>
//   );
// }

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isAuthenticated = useSelector(getisAuthenticated);

  return isAuthenticated ? <Navigate to={redirectTo} /> : <Component />;
};
