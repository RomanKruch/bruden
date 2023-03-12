import { NavLink } from "react-router-dom";
import "./NavBar.scss";

const NavBar = () => {
    return (
        <nav className="navigation">
            <NavLink 
                to='/bruden' 
                className={({ isActive }) => isActive ? "nav_link-active nav_link" : "nav_link"}
                end
            >
                Home
            </NavLink>
            <NavLink 
                to='/bruden/shop' 
                className={({ isActive }) => isActive ? "nav_link-active nav_link" : "nav_link"}
            >
                Shop
            </NavLink>
            <NavLink 
                to='/bruden/blog' 
                className={({ isActive }) => isActive ? "nav_link-active nav_link" : "nav_link"}
            >
                Blog
            </NavLink>
            <NavLink 
                to='/bruden/about' 
                className={({ isActive }) => isActive ? "nav_link-active nav_link" : "nav_link"}
            >
                About Us
            </NavLink>
            <NavLink 
                to='/bruden/contact' 
                className={({ isActive }) => isActive ? "nav_link-active nav_link" : "nav_link"}
            >
                Contact Us
            </NavLink>
            
        </nav>
    )
}

export default NavBar;