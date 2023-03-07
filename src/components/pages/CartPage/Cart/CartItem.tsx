import { IProduct } from "../../../../Types";
import { useState } from "react";
import { onChangeQty } from "../../../redux/user/userSlice";
import { useDispatch, useSelector } from 'react-redux';
import { onDeleteProduct } from "../../../redux/user/userOperations";
import { IState } from "../../../redux/store";

interface ILocalState {
    product: IProduct&{qty: number}
}

const CartItem = ({ product }: ILocalState) => {
    const {img, title, price, _id, totalQty, qty} = product;

    const dispatch = useDispatch();

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = +e.target.value;

        if(totalQty < value) {
           return  dispatch(onChangeQty({id: _id, value: totalQty}));
        }
        dispatch(onChangeQty({id: _id, value}));
    }

    return (
        <li className="cart_item">
            <div className="cart_item_contentWrap">
                <button className="cart_item_btn" onClick={() => dispatch<any>(onDeleteProduct(product._id))}>X</button>
                <img src={img.small.ref} alt="" width='60' height='60'/>
                <h3 className="cart_item_title">{title}</h3>
            </div>
            <div className="cart_item_priceWrap">
                <p className="cart_item_price">C$ {price}</p>
                <label className='cart_item_inpLabel'>
                    Qty:
                    <input 
                        type="number" 
                        className='cart_item_inp'
                        value={qty +''}
                        onChange={onChange} 
                    />
                </label>
                <p className="cart_item_price">C$ {(price*qty).toFixed(2)}</p>
            </div>
        </li>
    )
};

export default CartItem;