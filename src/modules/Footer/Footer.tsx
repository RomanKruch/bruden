import Logo from '../../UI/Logo/Logo';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer_wrap">
        <div className="footer_logo_wrap">
          <Logo />
        </div>

        <p className="footer_text">©2023 by Roman Kruch :)</p>
        <div className="footer_text">
          Made in UKRAINE{' '}
          <div className="footer_flag">
            <div className="footer_flag_stripe">
              <div className="footer_flag_blue"></div>
              <div className="footer_flag_yellow"></div>
            </div>
            <div className="footer_flag_stripe">
              <div className="footer_flag_blue"></div>
              <div className="footer_flag_yellow"></div>
            </div>
            <div className="footer_flag_stripe">
              <div className="footer_flag_blue"></div>
              <div className="footer_flag_yellow"></div>
            </div>
            <div className="footer_flag_stripe">
              <div className="footer_flag_blue"></div>
              <div className="footer_flag_yellow"></div>
            </div>
            <div className="footer_flag_stripe">
              <div className="footer_flag_blue"></div>
              <div className="footer_flag_yellow"></div>
            </div>
            <div className="footer_flag_stripe">
              <div className="footer_flag_blue"></div>
              <div className="footer_flag_yellow"></div>
            </div>
          </div>
        </div>
      </div>

      <ul className="footer_list">
        <li className="footer_item">
          <h3 className="footer_title">Shop</h3>
          <Link to="shop" className="footer_link">
            Bags
          </Link>
          <Link to="shop" className="footer_link">
            Belts
          </Link>
          <Link to="shop" className="footer_link">
            Sunglasses
          </Link>
        </li>
        <li className="footer_item">
          <h3 className="footer_title">Account</h3>
          <Link to="auth" className="footer_link">
            My Account
          </Link>
          <Link to="cart" className="footer_link">
            Cart
          </Link>
        </li>
        <li className="footer_item">
          <h3 className="footer_title">Information</h3>
          <Link to="about" className="footer_link">
            About Us
          </Link>
        </li>
        <li className="footer_item">
          <h3 className="footer_title">Contacts</h3>
          <p className="footer_text">Email: kruchroman81@gmail.com</p>
          <p className="footer_text">
            Git hub:{' '}
            <a
              href="https://github.com/RomanKruch"
              target="_blank"
              className="footer_link"
            >
              RomanKruch
            </a>
          </p>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
