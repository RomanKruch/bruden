import './BurgerMenu.scss';
import { createPortal } from 'react-dom';
import { NavLink, Link } from 'react-router-dom';
import {ReactComponent as Instagram} from '../../icons/Header/instagram-icon.svg';
import {ReactComponent as Search} from '../../icons/Header/search-icon.svg';
import {ReactComponent as Auth} from '../../icons/Header/auth-icon.svg';

const root = document.getElementById('burger_root') as HTMLElement;

interface IProps {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isOpen: boolean;
}

const BurgerMenu = ({ isOpen, setIsOpen }: IProps) => (
    createPortal((
        <div className={`burger ${isOpen ? 'burger-open': ''}`}>
            <nav className="burger_navigation">
                <NavLink 
                    to='/' 
                    className={({ isActive }) => isActive ? "burger_link-active burger_link" : "burger_link"}
                    onClick={() => setIsOpen(false)}
                >
                    Home
                </NavLink>
                <NavLink 
                    to='/shop' 
                    className={({ isActive }) => isActive ? "burger_link-active burger_link" : "burger_link"}
                    onClick={() => setIsOpen(false)}
                >
                    Shop
                </NavLink>
                <NavLink 
                    to='/blog' 
                    className={({ isActive }) => isActive ? "burger_link-active burger_link" : "burger_link"}
                    onClick={() => setIsOpen(false)}
                >
                    Blog
                </NavLink>
                <NavLink
                    to='/about' 
                    className={({ isActive }) => isActive ? "burger_link-active burger_link" : "burger_link"}
                    onClick={() => setIsOpen(false)}
                >
                    About Us
                </NavLink>
                <NavLink 
                    to='/contact' 
                    className={({ isActive }) => isActive ? "burger_link-active burger_link" : "burger_link"}
                    onClick={() => setIsOpen(false)}
                >
                    Contact Us
                </NavLink>
            </nav> 

            <div className="burger_icons_wrap">
                <a href='https://www.instagram.com/brudenmtl'>
                    <Instagram />
                </a>

                <Link to='/shop' onClick={() => setIsOpen(false)}>
                    <Search />
                </Link>

                <Link to='/auth' onClick={() => setIsOpen(false)}>
                    <Auth />
                </Link>
            </div>   
        </div>
    ), root)
);

export default BurgerMenu;