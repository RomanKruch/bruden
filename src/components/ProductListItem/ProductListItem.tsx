import Rating from '@mui/material/Rating';
import LikeBtn from '../LikeBtn/LikeBtn';
import EyeBtn from '../EyeBtn/EyeBtn';
import CartBtn from '../CartBtn/CartBtn';
import { IProduct } from '../../types/Types';
import './ProductListItem.scss';

interface IProps {
  product: IProduct;
}

const ProductListItem = ({ product }: IProps) => {
  const { title, img, description, price, rating } = product;

  return (
    <li className="productListItem">
      <img src={img.small.ref} alt="img" width="300" height="300" />
      <div className="productListItem_wrap">
        <h3 className="productListItem_title">{title}</h3>
        <div className="productListItem_rating_wrap">
          <Rating value={rating} precision={0.1} inert />
        </div>
        <p className="productListItem_price">C$ {price}</p>
        <p className="productListItem_description">{description}</p>
        <div className="productListItem_btn_wrap">
          <LikeBtn id={product._id} />
          <EyeBtn id={product._id} />
          <CartBtn id={product._id} />
        </div>
      </div>
    </li>
  );
};

export default ProductListItem;
