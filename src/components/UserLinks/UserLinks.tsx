import { Link } from 'react-router-dom';
import './UserLinks.scss';

const UserLinks = () => (
  <p className="userLinks">
    Please{' '}
    <Link to="login" className="userLinks_link">
      login
    </Link>{' '}
    or{' '}
    <Link to="register" className="userLinks_link">
      register
    </Link>{' '}
    your account :)
  </p>
);

export default UserLinks;
