import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch, useSelector } from 'react-redux';
import { onLikeProduct } from "../../redux/user/userOperations";
import { IProduct } from "../../types/Types";
import { IState } from "../../redux/store";
import IconBtn from "../../UI/IconBtn/IconBtn";
import { Link } from "react-router-dom";

interface IProps {
    product: IProduct;
}

const LikeBtn = ({ product }:IProps) => {
    const isInLiked = useSelector((state: IState) => state.user.liked.some(item => item._id === product._id));
    const isLogged = useSelector((state: IState) => state.user.isLogged);
    const dispatch = useDispatch();

    const onClick = () => {
        dispatch<any>(onLikeProduct(product._id))
    }
    
    return  isLogged ? 
    <IconBtn onClick={onClick}>{isInLiked ? <FavoriteIcon/> : <FavoriteBorderIcon/>}</IconBtn> 
    : 
    <Link to='/bruden/auth' className="iconBtn"><FavoriteBorderIcon/></Link>
}

export default LikeBtn;