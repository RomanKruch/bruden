import './AddToCartBtn.scss';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { onUserCart } from '../../redux/user/userOperations';
import { IProduct } from '../../types/Types';
import { Link } from 'react-router-dom';

interface IProps {
  className?: string;
  qty?: number;
  product: IProduct;
}

const AddToCartBtn = ({ className = '', qty = 1, product }: IProps) => {
  const isInCart = useAppSelector(state =>
    state.user.cart.some(item => item._id === product._id),
  );
  const isLogged = useAppSelector(state => state.user.isLogged);
  const dispatch = useAppDispatch();

  const onCartBtn = () => {
    dispatch(onUserCart([product._id, qty]))
  }

  return isLogged ? (
    !isInCart ? (
      <button
        type="button"
        className={`addToCartBtn ${className}`}
        onClick={onCartBtn}
      >
        Add to cart
      </button>
    ) : (
      <Link to="/bruden/cart" className={`addToCartBtn ${className}`}>
        Go to Cart
      </Link>
    )
  ) : (
    <Link to="/bruden/auth" className={`addToCartBtn ${className}`}>
      Add to cart
    </Link>
  );
};

export default AddToCartBtn;
