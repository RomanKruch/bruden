import { Link } from "react-router-dom";
import logo from "../../icons/Header/logo.png";
import NavBar from "./NavBar/NavBar";
import OtherNav from "./OtherNav";
import "./Header.scss";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <Link to='/'>
                    <img src={logo} alt="logo" width='125' height='25'/>
                </Link>

                <NavBar />

                <OtherNav />
            </div>
        </header>
    )
};

export default Header;