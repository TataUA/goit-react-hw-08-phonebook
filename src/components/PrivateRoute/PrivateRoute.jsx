import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectUserAuthentication } from 'redux/auth/authSelectors';

const PrivateRoute = ({ children, redirectTo = '/' }) => {
  const authenticated = useSelector(selectUserAuthentication);

  return authenticated ? children : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
