import { Link } from "react-router-dom";
import {ReactComponent as Instagram} from '../../../icons/Header/instagram-icon.svg';
import {ReactComponent as Search} from '../../../icons/Header/search-icon.svg';
import {ReactComponent as Auth} from '../../../icons/Header/auth-icon.svg';
import {ReactComponent as Cart} from '../../../icons/Header/cart-icon.svg';
import "./OtherNav.scss"


const OtherNav = () => {
    return (
        <div className="otherNav_wrap">
            <Link to='/'>
                <Instagram />
            </Link>

            <Link to='/shop'>
                <Search />
            </Link>

            <Link to='/auth'>
                <Auth />
            </Link>

            <div className="cart_wrap">
                <Link to='/cart'>
                    <Cart />
                </Link>
                <span className="cart_quantity">0</span>
                <p className="cart_price">$ 0.00</p>
            </div>
        </div>
    )
}

export default OtherNav;