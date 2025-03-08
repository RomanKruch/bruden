import Logo from "../../UI/Logo/Logo";
import NavBar from "../../components/NavBar/NavBar";
import OtherNav from "../../components/OtherNav";
import "./Header.scss";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header_logo">
                    <Logo />
                </div>

                <NavBar/>

                <OtherNav />
            </div>
        </header>
    )
};

export default Header;