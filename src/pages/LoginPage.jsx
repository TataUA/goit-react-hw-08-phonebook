import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectUserAuthentication } from 'redux/auth/authSelectors';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { Title } from 'components/PageStyled/RegicterPage.styled';

const LoginPage = () => {
  const authenticated = useSelector(selectUserAuthentication);

  if (authenticated) return <Navigate to={'/contacts'} />;

  return (
    <>
      <Title>Log in to your account</Title>
      <LoginForm />
    </>
  );
};

export default LoginPage;
