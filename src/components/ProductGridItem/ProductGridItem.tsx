import { useState } from "react";
import Rating from '@mui/material/Rating';
import { IProduct } from "../../types/Types";
import LikeBtn from "../LikeBtn/LikeBtn";
import EyeBtn from "../EyeBtn/EyeBtn";
import CartBtn from "../CartBtn/CartBtn";
import './ProductGridItem.scss';

interface IProps {
    product: IProduct;
    small?: boolean;
}

const ProductGridItem = ({ product, small=false }: IProps) => {
    const [value, setValue] = useState<number | null>(5);
    const { title, price, img } = product;

    return (
        <li className="productGridItem">
            <div className="productGridItem_img_wrap">
                <img src={img.small.ref} alt="" width='260px' height='260px'/>
                <div className={`productGridItem_overlay ${small ? 'productGridItem_overlay_small' : ''}`}>
                    <div className="productGridItem_btnWrap">
                        <LikeBtn product={product} />

                        <EyeBtn id={product._id}/>
                    </div>
                    <CartBtn product={product}/>
                </div>
            </div>
            <h3 className="productGridItem_title">{title}</h3>

            <div className="productGridItem_rating_wrap">
                <Rating
                    value={value}
                    onChange={(_, newValue) => {
                        setValue(newValue);
                    }}
                    precision={0.5}
                />
            </div>
            <p className="productGridItem_price">C$ {price}</p>
        </li>
    )
};

export default ProductGridItem;