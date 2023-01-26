import Cart from './Cart/Cart';
import CartTotals from './CartTotals/CartTotals';

const CartPage = () => (
    <main>
        <div className="container">
            <Cart /> 
            <CartTotals />
        </div>
    </main>
)

export default CartPage;