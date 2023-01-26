import { Link } from "react-router-dom";
import {ReactComponent as Instagram} from '../../../icons/Header/instagram-icon.svg';
import {ReactComponent as Search} from '../../../icons/Header/search-icon.svg';
import {ReactComponent as Auth} from '../../../icons/Header/auth-icon.svg';
import {ReactComponent as Cart} from '../../../icons/Header/cart-icon.svg';
import "./OtherNav.scss"

import { useSelector}  from 'react-redux';
import { IState } from "../../redux/store";


const OtherNav = () => {
    const qty = useSelector((state: IState) => state.cart.items.reduce((acc, item) => acc+=item.qty,0));
    const price = useSelector((state: IState) => state.cart.items.reduce((acc, item) => acc+=item.price*item.qty,0));

    return (
        <div className="otherNav_wrap">
            <a href='https://www.instagram.com/brudenmtl'>
                <Instagram />
            </a>

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
                <span className="cart_quantity">{qty}</span>
                <p className="cart_price">$ {price.toFixed(2)}</p>
            </div>
        </div>
    )
}

export default OtherNav;