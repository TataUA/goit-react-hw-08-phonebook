import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  padding: 0 20px 50px;
  margin: 0 auto;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  color: #120d14;
  @media screen and (min-width: 321px) {
    width: 480px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
    font-size: 20px;
  }
`;

export const Header = styled.header`
  border-bottom: 1px solid #48494a;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LinkAuth = styled(NavLink)`
  display: inline-flex;
  margin-right: auto;
  padding: 20px;
  font-weight: 600;
  color: #120d14;
  &.active {
    color: #8a1775;
  }
  &:hover {
    transform: scale(1.1);
  }
`;

export const Link = styled(NavLink)`
  display: inline-flex;
  padding: 20px;
  font-weight: 600;
  color: #120d14;
  &.active {
    color: #8a1775;
  }
  &:hover {
    transform: scale(1.1);
  }
`;

export const Email = styled.p`
  padding: 20px;
  margin-right: 10px;
  color: #120d14;
  font-weight: 600;
  &.active {
    color: #8a1775;
  }
`;

export const Button = styled.button`
  padding: 10px;
  height: 40px;
  font-weight: 600;
  font-size: 16px;
  border: 1px solid #48494a;
  border-radius: 8px;
  background-color: transparent;
  color: #120d14;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.1);
    color: #8a1775;
  }
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const SectionFooter = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export const Heart = styled.span`
  color: #8a1775;
`;

export const Name = styled.span`
  color: #120d14;
  &:hover {
    color: #8a1775;
  }
`;
