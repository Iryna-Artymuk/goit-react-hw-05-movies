import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import {
  Container,
  Header,
  Navigation,
  StyledNavLink,
} from './StyledSharedLayout ';
const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Navigation>
          <StyledNavLink to="/"> Home</StyledNavLink>
          <br />
          <StyledNavLink to="/movies"> Movies</StyledNavLink>
        </Navigation>
      </Header>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
export default SharedLayout;
