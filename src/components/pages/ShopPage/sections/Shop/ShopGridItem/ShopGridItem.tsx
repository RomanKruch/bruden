import { useState } from "react";
import Rating from '@mui/material/Rating';
import { IProduct } from "../../../../../../Types";
import LikeBtn from "../../../../../LikeBtn/LikeBtn";
import EyeBtn from "../../../../../EyeBtn/EyeBtn";
import CartBtn from "../../../../../CartBtn/CartBtn";
import './ShopGridItem.scss';

interface IProps {
    product: IProduct;
}

const ShopGridItem = ({ product }: IProps) => {
    const [value, setValue] = useState<number | null>(5);
    const { title, price, img } = product;

    return (
        <li className="shop_gridItem">
            <div className="shop_gridItem_img_wrap">
                <img src={img.small.ref} alt="" width='260px' height='260px'/>
                <div className="shop_gridItem_overlay">
                    <div className="shop_gridItem_btnWrap">
                        <LikeBtn product={product} />

                        <EyeBtn product={product}/>
                    </div>
                    <CartBtn product={product}/>
                </div>
            </div>
            <h3 className="shop_gridItem_title">{title}</h3>

            <div className="shop_gridItem_rating_wrap">
                <Rating
                    value={value}
                    onChange={(_, newValue) => {
                        setValue(newValue);
                    }}
                    precision={0.5}
                />
            </div>
            <p className="shop_gridItem_price">C$ {price}</p>
        </li>
    )
};

export default ShopGridItem;