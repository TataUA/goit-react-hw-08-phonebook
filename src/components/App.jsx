import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { currentUserThunk, logoutUserThunk } from 'redux/auth/authThunk';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import {
  selectUserAuthentication,
  selectUserToken,
} from 'redux/auth/authSelectors';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';

const HomePage = lazy(() => import('pages/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectUserToken);
  const authenticated = useSelector(selectUserAuthentication);

  useEffect(() => {
    if (!token || authenticated) return;
    dispatch(currentUserThunk());
  }, [token, authenticated, dispatch]);

  const handleLogOut = () => {
    dispatch(logoutUserThunk());
  };

  return (
    <Routes>
      <Route path="/" element={<SharedLayout handleLogOut={handleLogOut} />}>
        <Route index element={<HomePage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route
          path="contacts"
          element={
            <PrivateRoute redirectTo="/login">
              <ContactsPage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
