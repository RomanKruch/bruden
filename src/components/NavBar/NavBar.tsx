import { NavLink } from "react-router-dom";
import "./NavBar.scss";

const NavBar = () => {
    return (
        <nav className="navigation">
            <NavLink 
                to='/' 
                className={({ isActive }) => isActive ? "nav_link-active nav_link" : "nav_link"}
            >
                Home
            </NavLink>
            <NavLink 
                to='/shop' 
                className={({ isActive }) => isActive ? "nav_link-active nav_link" : "nav_link"}
            >
                Shop
            </NavLink>
            <NavLink 
                to='/blog' 
                className={({ isActive }) => isActive ? "nav_link-active nav_link" : "nav_link"}
            >
                Blog
            </NavLink>
            <NavLink 
                end
                to='/about' 
                className={({ isActive }) => isActive ? "nav_link-active nav_link" : "nav_link"}
            >
                About Us
            </NavLink>
            <NavLink 
                end
                to='/contact' 
                className={({ isActive }) => isActive ? "nav_link-active nav_link" : "nav_link"}
            >
                Contact Us
            </NavLink>
            
        </nav>
    )
}

export default NavBar;