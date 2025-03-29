import './CartTotals.scss';
import { useAppSelector } from '../../redux/hooks';
import { useNavigate } from 'react-router-dom';

const CartTotals = () => {
  const price = useAppSelector(state =>
    state.user.cart.reduce((acc, item) => (acc += item.price * item.qty), 0),
  ).toFixed(2);

  const navigate = useNavigate();
  const onClick = () => {
    navigate('cartTotals');
  };

  return (
    <section className="cartTotals">
      <h2 className="cartTotals_title">Cart totals</h2>
      <p className="cartTotals_subtitle">
        Subtotal
        <span className="cartTotals_price">C$ {price}</span>
      </p>
      <p className="cartTotals_subtitle">
        Total
        <span className="cartTotals_price">C$ {price}</span>
      </p>
      <div className="cartTotals_btn_wrap">
        <button type="button" className="cartTotals_btn" onClick={onClick}>
          Proceed to checkout
        </button>
      </div>
    </section>
  );
};

export default CartTotals;
