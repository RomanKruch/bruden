import { NavLink } from 'react-router-dom';
import './NavBar.scss';

const NavBar = () => {
  return (
    <nav className="navigation">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? 'nav_link-active nav_link' : 'nav_link'
        }
        end
      >
        Home
      </NavLink>
      <NavLink
        to="shop"
        className={({ isActive }) =>
          isActive ? 'nav_link-active nav_link' : 'nav_link'
        }
      >
        Shop
      </NavLink>

      <NavLink
        to="about"
        className={({ isActive }) =>
          isActive ? 'nav_link-active nav_link' : 'nav_link'
        }
      >
        About Us
      </NavLink>
    </nav>
  );
};

export default NavBar;
