import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import hero1 from '../../images/hero/hero1.png';
import hero2 from '../../images/hero/hero2.png';
import hero3 from '../../images/hero/hero3.png';
import hero4 from '../../images/hero/hero4.png';
import ShopNowBtn from "../ShopNowBtn/ShopNowBtn";
import "swiper/scss";
import "swiper/scss/pagination";
import './slider.scss';



const Slider = () => {
    return (
        <div>
            <Swiper
                direction={"vertical"}
                pagination={{
                    clickable: true,
                    verticalClass: 'pag',
                    bulletClass: "pag_item",
                    bulletActiveClass: 'pag_item-active',
                }}
                navigation
                modules={[Pagination, Autoplay]}
                className="slider"
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false
                }}
            >
                <SwiperSlide className="item">
                    <div className="item_title_wrap">
                        <p className="item_subtitle">Bags - sunglasses - belts</p>
                        <h2 className="item_title">Exclusive accessories for connoisseurs of style</h2>
                        <p className="item_description">Designed in Montreal, Bruden's Backpack embodies luxury fashion while keeping comfort and versatility</p>
                        <ShopNowBtn type="black"/>
                    </div>
                    <img src={hero1} alt="bagImg"/>
                </SwiperSlide>
                <SwiperSlide className="item">
                    <div className="item_title_wrap">
                        <p className="item_subtitle">Bags - sunglasses - belts</p>
                        <h2 className="item_title">Exclusive accessories for connoisseurs of style</h2>
                        <p className="item_description">Designed in Montreal, Bruden's Backpack embodies luxury fashion while keeping comfort and versatility</p>
                        <ShopNowBtn type="black"/>
                    </div>
                    <img src={hero2} alt="bagImg"/>
                </SwiperSlide>
                <SwiperSlide className="item">
                    <div className="item_title_wrap">
                        <p className="item_subtitle">Bags - sunglasses - belts</p>
                        <h2 className="item_title">Exclusive accessories for connoisseurs of style</h2>
                        <p className="item_description">Designed in Montreal, Bruden's Backpack embodies luxury fashion while keeping comfort and versatility</p>
                        <ShopNowBtn type="black"/>
                    </div>
                    <img src={hero3} alt="bagImg"/>
                </SwiperSlide>
                <SwiperSlide className="item">
                    <div className="item_title_wrap">
                        <p className="item_subtitle">Bags - sunglasses - belts</p>
                        <h2 className="item_title">Exclusive accessories for connoisseurs of style</h2>
                        <p className="item_description">Designed in Montreal, Bruden's Backpack embodies luxury fashion while keeping comfort and versatility</p>
                        <ShopNowBtn type="black"/>
                    </div>
                    <img src={hero4} alt="bagImg"/>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Slider;