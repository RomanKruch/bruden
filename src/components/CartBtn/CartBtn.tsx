import IconBtn from "../IconBtn/IconBtn";
import { IProduct } from "../pages/ShopPage/sections/Shop/types";
import { Link } from "react-router-dom";
import { onAddProduct } from "../redux/cart/cartActions";
import { IState } from "../redux/store";
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as Cart } from "../../icons/dealOfWeek/cart.svg";

interface IProps {
    product: IProduct;
}


const CartBtn = ({  product }: IProps) => {
    const isInCart = useSelector((state: IState) => state.cart.items.some(item => item.id === product.id));
    const dispatch = useDispatch();
    
    return !isInCart ? 
    <IconBtn onClick={() => dispatch(onAddProduct({product, qty: 1}))}><Cart /></IconBtn>
    :
    <Link to='/cart' className="iconBtn"><Cart /></Link>
}

export default CartBtn;