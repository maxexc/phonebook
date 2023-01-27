import { useAuth } from "Hooks"
import { PropTypes } from "prop-types";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isRefreshing && !isLoggedIn;

  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};

PrivateRoute.propTypes ={
  component: PropTypes.object,
  redirectTo: PropTypes.string
}
