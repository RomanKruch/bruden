import IconBtn from '../../UI/IconBtn/IconBtn';
import { useNavigate } from 'react-router-dom';
import { onUserCart } from '../../redux/user/userOperations';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import CartAddIcon from '../../assets/icons/cart_add_icon.svg?react';
import CartIcon from '../../assets/icons/cart_icon.svg?react';

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
      {isInCart ? <CartIcon /> : <CartAddIcon />}
    </IconBtn>
  );
};

export default CartBtn;
