import AddToCartBtn from '../../UI/AddToCartBtn/AddToCartBtn';
import LikeBtn from '../LikeBtn/LikeBtn';
import EyeBtn from '../EyeBtn/EyeBtn';
import { IProduct } from '../../types/Types';
import Rating from '@mui/material/Rating';
import './DealOfWeekItem.scss';

interface IProps {
  product: IProduct;
}

const DealOfWeekItem = ({ product }: IProps) => {
  const { img, title, description, price, rating } = product;

  return (
    <div className="dealOfWeekItem">
      <img src={img.large.ref} alt="img" width="260" height="340" />
      <div className="dealOfWeekItem_wrap">
        <h3 className="dealOfWeekItem_title">{title}</h3>

        <div className="dealOfWeekItem_rating_wrap">
          <Rating value={rating} precision={0.1} inert/>
        </div>

        <div className="dealOfWeekItem_rating"></div>

        <p className="dealOfWeekItem_price">C$ {price}</p>

        <span className="dealOfWeekItem_line"></span>

        <p className="dealOfWeekItem_description">
          {description.split('').slice(0, 99).join('')}...
        </p>
        <div className="dealOfWeekItem_btn_wrap">
          <AddToCartBtn className="dealOfWeekItem_btn" id={product._id} />
          <LikeBtn id={product._id} />
          <EyeBtn id={product._id} />
        </div>
      </div>
    </div>
  );
};

export default DealOfWeekItem;
