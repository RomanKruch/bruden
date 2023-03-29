import Rating from '@mui/material/Rating';
import { useState } from 'react';
import LikeBtn from "../LikeBtn/LikeBtn";
import EyeBtn from "../EyeBtn/EyeBtn";
import CartBtn from "../CartBtn/CartBtn";
import { IProduct } from '../../types/Types';
import './ProductListItem.scss'

interface IProps {
    product: IProduct;
}

const ProductListItem = ({ product }: IProps) => {
    const [value, setValue] = useState<number | null>(5);
    const { title, img, description, price } = product;

    return (
        <li className="productListItem">
            <img src={img.small.ref} alt="img" width='300' height='300' />
            <div className="productListItem_wrap">
                <h3 className="productListItem_title">{title}</h3>
                <div className="productListItem_rating_wrap">
                    <Rating
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                        precision={0.5}
                    />
                </div>
                <p className="productListItem_price">C$ {price}</p>
                <p className="productListItem_description">{description}</p>
                <div className="productListItem_btn_wrap">
                    <LikeBtn product={product}/>
                    <EyeBtn product={product}/>
                    <CartBtn product={product}/>
                </div>
            </div>
        </li>
    )
};

export default ProductListItem;