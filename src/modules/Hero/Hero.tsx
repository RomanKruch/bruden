import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import { nanoid } from "nanoid";
import hero1 from "../../assets/images/hero/hero1.png";
import hero2 from '../../assets/images/hero/hero2.png';
import hero3 from '../../assets/images/hero/hero3.png';
import hero4 from '../../assets/images/hero/hero4.png';
import "./Hero.scss";
import HeroItem from "../../components/HeroItem/HeroItem";

const imgRefs = [hero1, hero2, hero3, hero4];

const Hero = () => {
    return (
        <section className="hero">
                <div className="container">
                    <Swiper
                        direction={"vertical"}
                        pagination={{
                            clickable: true,
                            verticalClass: 'pag',
                            horizontalClass: 'pag',
                            bulletClass: "pag_item",
                            bulletActiveClass: 'pag_item-active',
                        }}
                        modules={[Pagination, Autoplay]}
                        spaceBetween={0}
                        className="hero_slider"
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false
                        }}
                        breakpoints={{      
                            768: {
                               direction: 'vertical',
                               spaceBetween: 0
                            },
        
                            0: {
                                direction: 'horizontal',
                                spaceBetween: 40
                            }
                        }}
                    >
                        {imgRefs.map(ref => (
                            <SwiperSlide className="item" key={nanoid()}>
                                <HeroItem imgRef={ref}/>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
        </section>
)};

export default Hero;