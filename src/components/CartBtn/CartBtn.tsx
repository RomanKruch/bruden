import IconBtn from '../../UI/IconBtn/IconBtn';
import { useNavigate } from 'react-router-dom';
import { onUserCart } from '../../redux/user/userOperations';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

interface IProps {
  id: string;
}

const CartBtn = ({ id }: IProps) => {
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
        dispatch(onUserCart([id]));
      }
    } else {
      navigate('/auth');
    }
  };

  return (
    <IconBtn onClick={onClick}>
      {isInCart ? <ShoppingCartIcon /> : <AddShoppingCartIcon />}
    </IconBtn>
  );
};

export default CartBtn;
