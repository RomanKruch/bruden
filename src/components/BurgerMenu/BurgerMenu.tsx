import './BurgerMenu.scss';
import { createPortal } from 'react-dom';
import { NavLink, Link } from 'react-router-dom';
import Instagram from '../../assets/icons/Header/instagram-icon.svg?react';
import Search from '../../assets/icons/Header/search-icon.svg?react';
import Auth from '../../assets/icons/Header/auth-icon.svg?react';

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
          to="/bruden"
          className={({ isActive }) =>
            isActive ? 'burger_link-active burger_link' : 'burger_link'
          }
          onClick={() => setIsOpen(false)}
          end
        >
          Home
        </NavLink>
        <NavLink
          to="/bruden/shop"
          className={({ isActive }) =>
            isActive ? 'burger_link-active burger_link' : 'burger_link'
          }
          onClick={() => setIsOpen(false)}
        >
          Shop
        </NavLink>
        <NavLink
          to="/bruden/blog"
          className={({ isActive }) =>
            isActive ? 'burger_link-active burger_link' : 'burger_link'
          }
          onClick={() => setIsOpen(false)}
        >
          Blog
        </NavLink>
        <NavLink
          to="/bruden/about"
          className={({ isActive }) =>
            isActive ? 'burger_link-active burger_link' : 'burger_link'
          }
          onClick={() => setIsOpen(false)}
        >
          About Us
        </NavLink>
        <NavLink
          to="/bruden/contact"
          className={({ isActive }) =>
            isActive ? 'burger_link-active burger_link' : 'burger_link'
          }
          onClick={() => setIsOpen(false)}
        >
          Contact Us
        </NavLink>
      </nav>

      <div className="burger_icons_wrap">
        <a href="https://www.instagram.com/brudenmtl">
          <Instagram />
        </a>

        <Link to="/bruden/shop" onClick={() => setIsOpen(false)}>
          <Search />
        </Link>

        <Link to="/bruden/auth" onClick={() => setIsOpen(false)}>
          <Auth />
        </Link>
      </div>
    </div>,
    root,
  );

export default BurgerMenu;
