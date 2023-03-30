import { Outlet, NavLink } from 'react-router-dom';
const SharedLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/"> Home</NavLink>
          <br />
          <NavLink to="/movies"> Movies</NavLink>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};
export default SharedLayout;
