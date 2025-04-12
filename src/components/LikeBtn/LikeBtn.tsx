import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { onLikeProduct } from '../../redux/user/userOperations';
import IconBtn from '../../UI/IconBtn/IconBtn';
import { useNavigate } from 'react-router-dom';
import LikeIcon from '../../assets/icons/like_icon.svg?react';
import LikeIconFilled from '../../assets/icons/like_icon_filled.svg?react';

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
      {isInLiked ? <LikeIconFilled /> : <LikeIcon />}
    </IconBtn>
  );
};

export default LikeBtn;
