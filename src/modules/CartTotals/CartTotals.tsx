import './CartTotals.scss';
import { useSelector } from 'react-redux';
import { IState } from '../../redux/store';

const CartTotals = () => {
    const price = useSelector((state: IState) => state.user.cart.reduce((acc, item) => acc+=item.price*item.qty,0)).toFixed(2);

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
                <button type="button" className="cartTotals_btn">Proceed to checkout</button>
            </div>
        </section>
    )
}

export default CartTotals;