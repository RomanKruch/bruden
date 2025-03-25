import { Link } from 'react-router-dom';
import './ShopNowBtn.scss';

interface IProps {
  type: 'black' | 'white' | 'transparentWhite' | 'transparentBlack';
  className?: string;
}

const ShopNowBtn = ({ type, className = '' }: IProps) => (
  <Link to="/shop" className={` ${type}_shopNow_btn shopNow_btn ${className} `}>
    SHOP NOW
  </Link>
);

export default ShopNowBtn;
