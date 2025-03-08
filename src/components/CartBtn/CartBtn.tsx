import IconBtn from "../../UI/IconBtn/IconBtn";
import { IProduct } from "../../types/Types";
import { Link } from "react-router-dom";
import { onAddProduct } from "../../redux/user/userOperations";
import { IState } from "../../redux/store";
import { useDispatch, useSelector } from 'react-redux';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

interface IProps {
    product: IProduct;
}

const CartBtn = ({  product }: IProps) => {
    const isInCart = useSelector((state: IState) => state.user.cart.some(item => item._id === product._id));
    const isLogged = useSelector((state: IState) => state.user.isLogged);
    const dispatch = useDispatch();
    
    return isLogged ? 
        !isInCart ? 
        <IconBtn onClick={() => dispatch<any>(onAddProduct([product._id]))}><AddShoppingCartIcon /></IconBtn>
        :
        <Link to='/bruden/cart' className="iconBtn"><ShoppingCartIcon/></Link>
    :
    <Link to='/bruden/auth' className="iconBtn"><AddShoppingCartIcon /></Link>
}

export default CartBtn;