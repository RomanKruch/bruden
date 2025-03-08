import Cart from '../../modules/Cart/Cart';
import CartTotals from '../../modules/CartTotals/CartTotals';

const CartPage = () => (
    <main>
        <div className="container">
            <Cart /> 
            <CartTotals />
        </div>
    </main>
)

export default CartPage;