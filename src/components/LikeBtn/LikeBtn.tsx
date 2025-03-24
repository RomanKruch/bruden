import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { onLikeProduct } from '../../redux/user/userOperations';
import { IProduct } from '../../types/Types';
import IconBtn from '../../UI/IconBtn/IconBtn';
import { Link } from 'react-router-dom';

interface IProps {
  product: IProduct;
}

const LikeBtn = ({ product }: IProps) => {
  const isInLiked = useAppSelector(state =>
    state.user.liked.some(item => item._id === product._id),
  );
  const isLogged = useAppSelector(state => state.user.isLogged);
  const dispatch = useAppDispatch();

  const onClick = () => {
    dispatch(onLikeProduct(product._id));
  };

  return isLogged ? (
    <IconBtn onClick={onClick}>
      {isInLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
    </IconBtn>
  ) : (
    <Link to="/bruden/auth" className="iconBtn">
      <FavoriteBorderIcon />
    </Link>
  );
};

export default LikeBtn;
