import Logo from "../../UI/Logo/Logo";
import { Link } from "react-router-dom";
import  Instagram from '../../assets/icons/Header/instagram-icon.svg?react';
import './Footer.scss'


const Footer = () => (
    <footer className="footer">
        <div className="container">
            <div className="footer_wrap">
                <div className="footer_logo_wrap">
                    <Logo />
                </div>

                <a href='https://www.instagram.com/brudenmtl' className="footer_link footer_link-inst">
                    <Instagram/>
                    @brudenmtl
                </a>
                <p className="footer_text">©2023 by Roman Kruch :)</p>
            </div>

            <ul className="footer_list">
                    <li className="footer_item">
                        <h3 className="footer_title">Shop</h3>
                        <Link to='/bruden/shop' className="footer_link">Bags</Link>
                        <Link to='/bruden/shop' className="footer_link">Belts</Link>
                        <Link to='/bruden/shop' className="footer_link">Sunglasses</Link>
                    </li>
                    <li className="footer_item">
                        <h3 className="footer_title">Account</h3>
                        <Link to='/bruden/auth' className="footer_link">Orders</Link>
                        <Link to='/bruden/auth' className="footer_link">Checkout</Link>
                        <Link to='/bruden/auth' className="footer_link">My Account</Link>
                        <Link to='/bruden/auth' className="footer_link">Account Details</Link>
                    </li>
                    <li className="footer_item">
                        <h3 className="footer_title">Information</h3>
                        <Link to='/bruden' className="footer_link">FAQ's</Link>
                        <Link to='/bruden/contact' className="footer_link">Contact Us</Link>
                        <Link to='/bruden' className="footer_link">Privacy Policy</Link>
                        <Link to='/bruden' className="footer_link">Return policy</Link>
                        <Link to='/bruden' className="footer_link">Shipping Policy</Link>
                        <Link to='/bruden' className="footer_link">Terms and Conditions</Link>
                    </li>
                    <li className="footer_item">
                        <h3 className="footer_title">Contacts</h3>   
                        <Link to='/bruden' className="footer_link">email@mail.com</Link>
                        <p className="footer_text">+1-000-000-0000</p>
                        <p className="footer_text">Bld, Street, town, ZIP Code </p>
                    </li>
                </ul>
        </div>
    </footer>
);

export default Footer;