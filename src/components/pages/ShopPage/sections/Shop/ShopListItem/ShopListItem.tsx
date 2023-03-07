import Rating from '@mui/material/Rating';
import { useState } from 'react';
import LikeBtn from "../../../../../LikeBtn/LikeBtn";
import EyeBtn from "../../../../../EyeBtn/EyeBtn";
import CartBtn from "../../../../../CartBtn/CartBtn";
import { IProduct } from '../../../../../../Types';
import './ShopListItem.scss';

interface IProps {
    product: IProduct;
}

const ShopListItem = ({ product }: IProps) => {
    const [value, setValue] = useState<number | null>(5);
    const { title, img, description, price } = product;

    return (
        <li className="shop_listItem">
            <img src={img.small.ref} alt="img" width='300' height='300' />
            <div className="shop_listItem_wrap">
                <h3 className="shop_listItem_title">{title}</h3>
                <div className="shop_listItem_rating_wrap">
                    <Rating
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                        precision={0.5}
                    />
                </div>
                <p className="shop_listItem_price">C$ {price}</p>
                <p className="shop_listItem_description">{description}</p>
                <div className="shop_listItem_btn_wrap">
                    <LikeBtn product={product}/>
                    <EyeBtn product={product}/>
                    <CartBtn product={product}/>
                </div>
            </div>
        </li>
    )
};

export default ShopListItem;