import './AddToCartBtn.scss';
import { useSelector, useDispatch} from 'react-redux';
import { onAddProduct } from '../redux/cart/cartActions';
import { IState } from '../redux/store';
import { IProduct } from '../pages/ShopPage/sections/Shop/types';
import { Link } from 'react-router-dom';

interface IProps {
    className?: String; 
    qty?: number;
    product: IProduct;
}

const AddToCartBtn = ({ className='', qty=1, product }: IProps) => {
    const isInCart = useSelector((state: IState) => state.cart.items.some(item => item.id === product.id));
    const dispatch = useDispatch();
    
    return !isInCart ?
        <button type="button" className={`addToCartBtn ${className}`} onClick={() => dispatch(onAddProduct({product, qty}))}>Add to cart</button>
        :
        <Link to='/cart' className={`addToCartBtn ${className}`}>Go to Cart</Link>
}

export default AddToCartBtn;