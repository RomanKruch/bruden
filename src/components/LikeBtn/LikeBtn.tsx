import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { onLikeProduct } from '../../redux/user/userOperations';
import IconBtn from '../../UI/IconBtn/IconBtn';
import { useNavigate } from 'react-router-dom';

interface IProps {
  id: string;
}

const LikeBtn = ({ id }: IProps) => {
  const isInLiked = useAppSelector(state =>
    state.user.liked.some(item => item._id === id),
  );
  const isLogged = useAppSelector(state => state.user.isLogged);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onClick = () => {
    if (isLogged) {
      dispatch(onLikeProduct(id));
    } else {
      navigate('/auth');
    }
  };

  return (
    <IconBtn onClick={onClick}>
      {isInLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
    </IconBtn>
  );
};

export default LikeBtn;
