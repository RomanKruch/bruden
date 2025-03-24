import UserInfo from "../../components/UserInfo/UserInfo";
import UserLinks from "../../components/UserLinks/UserLinks";
import LikedProducts from "../../modules/LikedProducts/LikedProducts";
import { useAppSelector } from "../../redux/hooks";
import './AuthPage.scss'

const AuthPage = () => {
    const isLogged = useAppSelector(state=> state.user.isLogged)

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