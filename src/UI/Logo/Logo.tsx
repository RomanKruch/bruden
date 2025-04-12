import { Link } from 'react-router-dom';
import logo from '../../assets/icons/logo.png';

const Logo = () => (
  <Link to="/">
    <img src={logo} alt="logo" width="125" height="25" />
  </Link>
);

export default Logo;
