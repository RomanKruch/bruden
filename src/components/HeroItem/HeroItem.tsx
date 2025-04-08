import ShopNowBtn from '../../UI/ShopNowBtn/ShopNowBtn';
import './HeroItem.scss';
import { IHeroItem } from '../../modules/Hero/Hero';

interface IProps {
  item: IHeroItem;
}

const HeroItem = ({ item }: IProps) => {
  const { image, subtitle, title } = item;

  return (
    <div className="heroItem">
      <div className="heroItem_title_wrap">
        <p className="heroItem_subtitle">bags - sunglasses - belts</p>
        <h2 className="heroItem_title">{title}</h2>
        <p className="heroItem_description">{subtitle}</p>
        <ShopNowBtn type="black" className="heroItem_btn" />
      </div>
      <img src={image} alt={title} height="100%" />
    </div>
  );
};

export default HeroItem;
