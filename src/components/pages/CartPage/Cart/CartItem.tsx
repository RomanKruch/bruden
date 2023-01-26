import { IProduct } from "../../ShopPage/sections/Shop/types";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { onDeleteProduct, onChangeQty } from "../../../redux/cart/cartActions";
import { IState } from "../../../redux/store";

interface ILocalState {
    product: IProduct&{qty: number}
}

const CartItem = ({ product }:ILocalState) => {
    const {img, title, price, qty} = product;

    const dispatch = useDispatch();

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = +e.target.value;
        dispatch(onChangeQty({id: product.id, value}));
    }

    return (
        <li className="cart_item">
            <div className="cart_item_contentWrap">
                <button className="cart_item_btn" onClick={() => dispatch(onDeleteProduct(product))}>X</button>
                <img src={img} alt="" width='60' height='60'/>
                <h3 className="cart_item_title">{title}</h3>
            </div>
            <div className="cart_item_priceWrap">
                <p className="cart_item_price">C$ {price}</p>
                <label className='cart_item_inpLabel'>
                    Qty:
                    <input 
                        type="number" 
                        className='cart_item_inp'
                        value={qty}
                        onChange={onChange} 
                    />
                </label>
                <p className="cart_item_price">C$ {(price*qty).toFixed(2)}</p>
            </div>
        </li>
    )
};

export default CartItem;