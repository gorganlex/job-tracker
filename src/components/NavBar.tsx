import { NavLink } from 'react-router';

const activeLinkStyleHandler = ({ isActive }: { isActive: boolean }) =>
  isActive ? { color: 'rgb(255, 0, 0)', fontWeight: 'bold' } : {};

export const NavBar = () => {
  return (
    <nav>
      <NavLink to="/" style={activeLinkStyleHandler}>
        Applications
      </NavLink>
      <NavLink to="/settings" style={activeLinkStyleHandler}>
        Settings
      </NavLink>
    </nav>
  );
};
