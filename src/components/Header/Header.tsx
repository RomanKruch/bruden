import Logo from "../Logo/Logo";
import NavBar from "./NavBar/NavBar";
import OtherNav from "./OtherNav";
import "./Header.scss";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <Logo />

                <NavBar />

                <OtherNav />
            </div>
        </header>
    )
};

export default Header;