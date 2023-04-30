import ShopNowBtn from "../../UI/ShopNowBtn/ShopNowBtn";
import './HeroItem.scss';

interface IProps {
    imgRef: string
}

const HeroItem = ({imgRef}: IProps) => (
    <div className="heroItem">
        <div className="heroItem_title_wrap">
            <p className="heroItem_subtitle">Bags - sunglasses - belts</p>
            <h2 className="heroItem_title">Exclusive accessories for connoisseurs of style</h2>
            <p className="heroItem_description">Designed in Montreal, Bruden's Backpack embodies luxury fashion while keeping comfort and versatility</p>
            <ShopNowBtn type="black" className="heroItem_btn"/>
        </div>
        <img src={imgRef} alt="bagImg"/>
    </div>
);

export default HeroItem;