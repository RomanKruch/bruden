import { Link } from 'react-router-dom';
import logo from '../../assets/icons/Header/logo.png';

const Logo = () => (
  <Link to="/bruden">
    <img src={logo} alt="logo" width="125" height="25" />
  </Link>
);

export default Logo;
