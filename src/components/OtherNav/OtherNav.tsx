import { Link } from 'react-router-dom';
import { ReactComponent as Instagram } from '../../assets/icons/Header/instagram-icon.svg';
import { ReactComponent as Search } from '../../assets/icons/Header/search-icon.svg';
import { ReactComponent as Auth } from '../../assets/icons/Header/auth-icon.svg';
import { ReactComponent as Cart } from '../../assets/icons/Header/cart-icon.svg';
import { useSelector } from 'react-redux';
import { IState } from '../../redux/store';
import BurgerBtn from '../../modules/BurgerBtn/BurgerBtn';
import './OtherNav.scss';

const OtherNav = () => {
  const qty = useSelector((state: IState) => state.user.cart.length);
  
  const price = useSelector((state: IState) =>
    state.user.cart.reduce((acc, item) => (acc += item.price * item.qty), 0),
  );

  return (
    <div className="otherNav_wrap">
      <a href="https://www.instagram.com/brudenmtl" className="otherNav_link">
        <Instagram />
      </a>

      <Link to="/bruden/shop" className="otherNav_link">
        <Search />
      </Link>

      <Link to="/bruden/auth" className="otherNav_link">
        <Auth />
      </Link>

      <div className="cart_wrap">
        <Link to="/bruden/cart">
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
