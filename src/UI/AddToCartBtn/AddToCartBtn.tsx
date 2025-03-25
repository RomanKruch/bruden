import './AddToCartBtn.scss';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { onUserCart } from '../../redux/user/userOperations';
import { useNavigate } from 'react-router-dom';

interface IProps {
  className?: string;
  qty?: number;
  id: string;
}

const AddToCartBtn = ({ className = '', qty = 1, id }: IProps) => {
  const isInCart = useAppSelector(state =>
    state.user.cart.some(item => item._id === id),
  );
  const isLogged = useAppSelector(state => state.user.isLogged);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onClick = () => {
    if (isLogged) {
      if (isInCart) {
        navigate('/cart');
      } else {
        dispatch(onUserCart([id, qty]));
      }
    } else {
      navigate('/auth');
    }
  };

  return (
    <button
      type="button"
      className={`addToCartBtn ${className}`}
      onClick={onClick}
    >
      {isInCart ? 'Go to cart' : 'Add to cart'}
    </button>
  );
};

export default AddToCartBtn;
