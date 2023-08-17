import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectUserAuthentication } from 'redux/auth/authSelectors';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Title } from 'components/PageStyled/RegicterPage.styled';

const RegisterPage = () => {
  const authenticated = useSelector(selectUserAuthentication);

  if (authenticated) return <Navigate to={'/contacts'} />;

  return (
    <>
      <Title>Create your account</Title>
      <RegisterForm />
    </>
  );
};

export default RegisterPage;
