import Rating from '@mui/material/Rating';
import { IProduct } from '../../types/Types';
import LikeBtn from '../LikeBtn/LikeBtn';
import EyeBtn from '../EyeBtn/EyeBtn';
import CartBtn from '../CartBtn/CartBtn';
import './ProductGridItem.scss';

interface IProps {
  product: IProduct;
  small?: boolean;
}

const ProductGridItem = ({ product, small = false }: IProps) => {
  const { title, price, img, rating } = product;

  return (
    <li className="productGridItem">
      <div className="productGridItem_img_wrap">
        <img src={img.small.ref} alt="" width="260px" height="260px" />
        <div
          className={`productGridItem_overlay ${
            small ? 'productGridItem_overlay_small' : ''
          }`}
        >
          <div className="productGridItem_btnWrap">
            <LikeBtn id={product._id} />

            <EyeBtn id={product._id} />
          </div>
          <CartBtn id={product._id} />
        </div>
      </div>
      <h3 className="productGridItem_title">{title}</h3>

      <div className="productGridItem_rating_wrap">
        <Rating value={rating} precision={0.1} inert />
      </div>
      <p className="productGridItem_price">C$ {price}</p>
    </li>
  );
};

export default ProductGridItem;
