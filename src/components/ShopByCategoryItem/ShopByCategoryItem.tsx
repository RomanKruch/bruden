import { ITag } from '../../types/Types';
import { Link } from 'react-router-dom';
import './ShopByCategoryItem.scss';

interface IProps {
  tag: ITag;
}

const ShopByCategoryItem = ({ tag }: IProps) => (
  <Link to="/shop">
    <img src={tag.img} alt={tag.name} className="shopByCatItem_img" />
    <h3 className="shopByCatItem_title">{tag.name}</h3>
  </Link>
);

export default ShopByCategoryItem;
