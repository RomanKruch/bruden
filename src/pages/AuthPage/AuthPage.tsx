import UserInfo from "../../components/UserInfo/UserInfo";
import UserLinks from "../../components/UserLinks/UserLinks";
import LikedProducts from "../../modules/LikedProducts/LikedProducts";
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