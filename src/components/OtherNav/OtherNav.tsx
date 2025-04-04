import { Link } from 'react-router-dom';
import Search from '../../assets/icons/Header/search-icon.svg?react';
import Auth from '../../assets/icons/Header/auth-icon.svg?react';
import Cart from '../../assets/icons/Header/cart-icon.svg?react';
import { useAppSelector } from '../../redux/hooks';
import BurgerBtn from '../../modules/BurgerBtn/BurgerBtn';
import './OtherNav.scss';

const OtherNav = () => {
  const qty = useAppSelector(state => state.user.cart.length);

  const price = useAppSelector(state =>
    state.user.cart.reduce((acc, item) => (acc += item.price * item.qty), 0),
  );

  return (
    <div className="otherNav_wrap">
      <Link to="shop" className="otherNav_link">
        <Search />
      </Link>

      <Link to="auth" className="otherNav_link">
        <Auth />
      </Link>

      <div className="cart_wrap">
        <Link to="cart">
          <Cart />
        </Link>
        <span className="cart_quantity">{qty}</span>
        <p className="cart_price">$ {price.toFixed(2)}</p>
      </div>

      <BurgerBtn />
    </div>
  );
};

export default OtherNav;
