import './BurgerMenu.scss';
import { createPortal } from 'react-dom';
import { NavLink, Link } from 'react-router-dom';
import Search from '../../assets/icons/search_icon.svg?react';
import Auth from '../../assets/icons/user_icon.svg?react';

const root = document.getElementById('burger_root') as HTMLElement;

interface IProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
}

const BurgerMenu = ({ isOpen, setIsOpen }: IProps) =>
  createPortal(
    <div className={`burger ${isOpen ? 'burger-open' : ''}`}>
      <nav className="burger_navigation">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'burger_link-active burger_link' : 'burger_link'
          }
          onClick={() => setIsOpen(false)}
          end
        >
          Home
        </NavLink>
        <NavLink
          to="shop"
          className={({ isActive }) =>
            isActive ? 'burger_link-active burger_link' : 'burger_link'
          }
          onClick={() => setIsOpen(false)}
        >
          Shop
        </NavLink>
        <NavLink
          to="about"
          className={({ isActive }) =>
            isActive ? 'burger_link-active burger_link' : 'burger_link'
          }
          onClick={() => setIsOpen(false)}
        >
          About Us
        </NavLink>
      </nav>

      <div className="burger_icons_wrap">
        <Link to="shop" onClick={() => setIsOpen(false)}>
          <Search />
        </Link>

        <Link to="auth" onClick={() => setIsOpen(false)}>
          <Auth />
        </Link>
      </div>
    </div>,
    root,
  );

export default BurgerMenu;
