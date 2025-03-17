import './AddToCartBtn.scss';
import { useSelector, useDispatch } from 'react-redux';
import { onAddProduct } from '../../redux/user/userOperations';
import { IState } from '../../redux/store';
import { IProduct } from '../../types/Types';
import { Link } from 'react-router-dom';

interface IProps {
  className?: string;
  qty?: number;
  product: IProduct;
}

const AddToCartBtn = ({ className = '', qty = 1, product }: IProps) => {
  const isInCart = useSelector((state: IState) =>
    state.user.cart.some(item => item._id === product._id),
  );
  const isLogged = useSelector((state: IState) => state.user.isLogged);
  const dispatch = useDispatch();

  return isLogged ? (
    !isInCart ? (
      <button
        type="button"
        className={`addToCartBtn ${className}`}
        onClick={() => dispatch<any>(onAddProduct([product._id, qty]))}
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
