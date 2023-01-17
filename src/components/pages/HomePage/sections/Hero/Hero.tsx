import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import hero1 from '../../../../../images/hero/hero1.png';
import hero2 from '../../../../../images/hero/hero2.png';
import hero3 from '../../../../../images/hero/hero3.png';
import hero4 from '../../../../../images/hero/hero4.png';
import "swiper/scss";
import "swiper/scss/pagination";
import "./Hero.scss";
import HeroSliderItem from "./HeroSliderItem";

const imgRefs = [hero1, hero2, hero3, hero4]

const Hero = () => (
    <section className="hero">
            <div className="container">
                <Swiper
                    direction={"vertical"}
                    pagination={{
                        clickable: true,
                        verticalClass: 'pag',
                        bulletClass: "pag_item",
                        bulletActiveClass: 'pag_item-active',
                    }}
                    modules={[Pagination, Autoplay]}
                    className="slider"
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false
                    }}
                >
                    {imgRefs.map(ref => (
                        <SwiperSlide className="item">
                            <HeroSliderItem imgRef={ref}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
    </section>
);

export default Hero;