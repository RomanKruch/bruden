import IconBtn from "../../UI/IconBtn/IconBtn";
import { IProduct } from "../../types/Types";
import { Link } from "react-router-dom";
import { onUserCart } from "../../redux/user/userOperations";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

interface IProps {
    product: IProduct;
}

const CartBtn = ({  product }: IProps) => {
    const isInCart = useAppSelector(state => state.user.cart.some(item => item._id === product._id));
    const isLogged = useAppSelector(state => state.user.isLogged);
    const dispatch = useAppDispatch();

    const onCartBtn = () => {
        dispatch(onUserCart([product._id]))
    }
    
    return isLogged ? 
        !isInCart ? 
        <IconBtn onClick={onCartBtn}><AddShoppingCartIcon /></IconBtn>
        :
        <Link to='/bruden/cart' className="iconBtn"><ShoppingCartIcon/></Link>
    :
    <Link to='/bruden/auth' className="iconBtn"><AddShoppingCartIcon /></Link>
}

export default CartBtn;