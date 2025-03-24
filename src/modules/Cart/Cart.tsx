import './Cart.scss';
import CartItem from '../../components/CartItem/CartItem';
import { useAppSelector } from '../../redux/hooks';

const Cart = () => {
    const products = useAppSelector(state => state.user.cart);

    return (
        <section className='cart'>
            <h1 className="cart_title">Cart</h1>

            <div className="cart_wrapper">
            <div className="cart_header">
                    <h3 className="cart_header_title cart_header_title-main">Shop</h3>
                    <div className="cart_header_wrap">
                        <h3 className="cart_header_title">Price</h3>
                        <h3 className="cart_header_title">Quantity</h3>
                        <h3 className="cart_header_title">Subtotal</h3>
                    </div>
                </div>
                <ul className="cart_list">
                    {products.length === 0 
                        ? 
                        <p className='cart_empty'>empty</p> 
                        :
                        products.map(item => (
                            <CartItem product={item} key={item._id}/>
                        ))}
                </ul>
                <div className="cart_footer">
                    <form className="cart_footer_form">
                        <input 
                            type="text" 
                            className="cart_footer_form_inp"
                        />
                        <button className="cart_footer_form_btn" type='button'>Apply coupon</button>
                    </form>
                    <button className="cart_footer_btn">Update cart</button>
                </div>
            </div>
        </section>
    )
}

export default Cart;