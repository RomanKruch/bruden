import AddToCartBtn from "../../../../AddToCartBtn/AddToCartBtn";
import LikeBtn from "../../../../LikeBtn/LikeBtn";
import EyeBtn from "../../../../EyeBtn/EyeBtn";
import { IProduct } from "../../../ShopPage/sections/Shop/types";
import { useState } from "react";
import Rating from '@mui/material/Rating';

interface IProps {
    product: IProduct
}

const DealOfWeekItem = ({ product }: IProps) => {
    const [value, setValue] = useState<number | null>(5);
    const { img, title, description, price } = product;
    
    return (
    <>
        <img src={img} alt="img" width='260' height='340'/>
        <div className="dealOfWeek_item_wrap">
            <h3 className="dealOfWeek_item_title">{title}</h3>

            <div className="dealOfWeek_item_rating_wrap">
                <Rating
                    value={value}
                    onChange={(_, newValue) => {
                        setValue(newValue);
                    }}
                    precision={0.5}
                />
            </div>

            <div className="dealOfWeek_item_rating"></div>

            <p className="dealOfWeek_item_price">C$ {price}</p>

            <span className="dealOfWeek_item_line"></span>

            <p className="dealOfWeek_item_description">{description.split('').slice(0,99).join('')}...</p>
            <div className="dealOfWeek_item_btn_wrap">
                <AddToCartBtn className='dealOfWeek_item_btn' product={product}/>
                <LikeBtn/>
                <EyeBtn product={product}/>
            </div>
        </div>
    </>
)};

export default DealOfWeekItem;