import { ReactComponent as Like } from "../../icons/dealOfWeek/Deal-of-the-week-heart.svg";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch, useSelector } from 'react-redux';
import { onAddToLike, onDeleteFromLike } from "../redux/user/userOperations";
import { IProduct } from "../../Types";
import { IState } from "../redux/store";
import IconBtn from "../IconBtn/IconBtn";

interface IProps {
    product: IProduct;
}

const LikeBtn = ({ product }:IProps) => {
    const isInLiked = useSelector((state: IState) => state.user.liked.some(item => item._id === product._id));
    const dispatch = useDispatch();

    const onClick = () => {
        if (isInLiked) {
            dispatch<any>(onDeleteFromLike(product._id))
        } else {
            dispatch<any>(onAddToLike(product._id))
        }
    }
    
    return  <IconBtn onClick={onClick}>{isInLiked ? <FavoriteIcon/> : <FavoriteBorderIcon/>}</IconBtn>
}

export default LikeBtn;