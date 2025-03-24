import { IProduct } from "../../types/Types";
import { onChangeQty } from "../../redux/user/userSlice";
import { useAppDispatch } from "../../redux/hooks";
import { onUserCart } from "../../redux/user/userOperations";
import './CartItem.scss';

interface ILocalState {
    product: IProduct&{qty: number}
}

const CartItem = ({ product }: ILocalState) => {
    const {img, title, price, _id, totalQty, qty} = product;

    const dispatch = useAppDispatch();

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = +e.target.value;

        if(totalQty < value) {
           return  dispatch(onChangeQty({id: _id, value: totalQty}));
        }
        dispatch(onChangeQty({id: _id, value}));
    }

    const onCartBtn = () => {
        dispatch(onUserCart([product._id]))
    }

    return (
        <li className="cartItem">
            <div className="cartItem_contentWrap">
                <button className="cartItem_btn" onClick={onCartBtn}>X</button>
                <img src={img.small.ref} alt="" width='60' height='60'/>
                <h3 className="cartItem_title">{title}</h3>
            </div>
            <div className="cartItem_priceWrap">
                <p className="cartItem_price">C$ {price}</p>
                <label className='cartItem_inpLabel'>
                    Qty:
                    <input 
                        type="number" 
                        className='cartItem_inp'
                        value={qty +''}
                        onChange={onChange} 
                    />
                </label>
                <p className="cartItem_price">C$ {(price*qty).toFixed(2)}</p>
            </div>
        </li>
    )
};

export default CartItem;