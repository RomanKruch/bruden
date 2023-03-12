import { Link } from "react-router-dom";
import './UserLinks.scss'

const UserLinks = () => (
    <p className="userLinks">
        Please <Link to="/bruden/login" className="userLinks_link">login</Link> or <Link to="/bruden/register" className="userLinks_link">register</Link> your account :)
    </p>
);

export default UserLinks;