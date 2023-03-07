import ShopNowBtn from "../../../../ShopNowBtn/ShopNowBtn";

interface IProps {
    imgRef: string
}

const HeroSliderItem = ({imgRef}: IProps) => (
    <>
        <div className="item_title_wrap">
            <p className="item_subtitle">Bags - sunglasses - belts</p>
            <h2 className="item_title">Exclusive accessories for connoisseurs of style</h2>
            <p className="item_description">Designed in Montreal, Bruden's Backpack embodies luxury fashion while keeping comfort and versatility</p>
            <ShopNowBtn type="black" className="item_btn"/>
        </div>
        <img src={imgRef} alt="bagImg"/>
    </>
);

export default HeroSliderItem;