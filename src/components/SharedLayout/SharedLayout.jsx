import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  selectUserAuthentication,
  selectUserData,
} from 'redux/auth/authSelectors';
import { Loader } from 'components/Loader/Loader';
import {
  Container,
  Header,
  Navigation,
  NavContainer,
  LinkAuth,
  Link,
  Email,
  Button,
  SectionFooter,
  Heart,
  Name,
} from 'components/SharedLayout/SharedLayout.styled';

export const SharedLayout = ({ handleLogOut }) => {
  const authenticated = useSelector(selectUserAuthentication);
  const user = useSelector(selectUserData);

  return (
    <Container>
      <Header>
        <Navigation>
          <LinkAuth to="/" end>
            Home
          </LinkAuth>
          {!authenticated ? (
            <>
              <Link to="/register">Sign up</Link>
              <Link to="/login">Log in</Link>
            </>
          ) : (
            <>
              <LinkAuth to="/contacts">Contacts</LinkAuth>
              <NavContainer>
                {user && <Email>😎 {user.email}</Email>}
                <Button type="button" onClick={handleLogOut}>
                  Log Out
                </Button>
              </NavContainer>
            </>
          )}
        </Navigation>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <SectionFooter>
        <p>
          &copy; 2023 Made with{' '}
          <Heart role="img" aria-label="heart">
            ❤
          </Heart>{' '}
          by{' '}
          <a
            href="https://github.com/TataUA"
            target="_blank"
            rel="noopener noreferrer"
            title="Github profile"
            aria-label="Link to Github profile"
          >
            <Name>Tata</Name>
          </a>
        </p>
      </SectionFooter>
    </Container>
  );
};

SharedLayout.propTypes = {
  handleLogOut: PropTypes.func.isRequired,
};
