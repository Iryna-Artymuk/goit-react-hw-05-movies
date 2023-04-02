import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
const Container = styled.div`
  padding: 10px;
  margin: auto;
  /* width: 1200px; */
`;
const Header = styled.header`
  display: flex;
  justify-content: center;

  gap: 20px;
  align-items: center;
  height: 80px;
  border-radius: 5px;
  background: #f8f3e8;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
  /* max-width: calc(100vw); */
`;
const Navigation = styled.nav`
  display: flex;

  gap: 20px;
  padding: 10px;
  /* max-width: calc(100vw); */
`;

const StyledNavLink = styled(NavLink)`
  padding: 15px;
  font-size: 25px;
  font-weight: 700;
  text-decoration: none;

  transition: color 350ms cubic-bezier(0.4, 0, 0.2, 1);
  color: #f88397;
  &.active,
  &:hover {
    color: #f50930;
  }
`;

export { Container, Header, Navigation, StyledNavLink };
