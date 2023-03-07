import UserInfo from "../../UserInfo/UserInfo";
import UserLinks from "../../UserLinks/UserLinks";
import LikedProducts from "../../LikedProducts/LikedProducts";
import { useSelector } from "react-redux";
import { IState } from "../../redux/store";
import './AuthPage.scss'

const AuthPage = () => {
    const isLogged = useSelector((state: IState) => state.user.isLogged)

    return (
        <main className="authPage">
            <div className="container">
                {isLogged ? 
                    (<>
                        <UserInfo />

                        <LikedProducts/>
                    </> )
                    : 
                    <UserLinks />
                }
            </div>
        </main>
)}

export default AuthPage;