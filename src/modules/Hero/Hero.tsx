import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import hero1 from '../../assets/images/hero/hero1.png';
import hero2 from '../../assets/images/hero/hero2.png';
import hero3 from '../../assets/images/hero/hero3.png';
import hero4 from '../../assets/images/hero/hero4.png';
import './Hero.scss';
import HeroItem from '../../components/HeroItem/HeroItem';

const imgRefs = [
  { id: 'hero1', ref: hero1 },
  { id: 'hero2', ref: hero2 },
  { id: 'hero3', ref: hero3 },
  { id: 'hero4', ref: hero4 },
];

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <Swiper
          key="hero"
          direction={'vertical'}
          pagination={{
            clickable: true,
            verticalClass: 'pag',
            horizontalClass: 'pag',
            bulletClass: 'pag_item',
            bulletActiveClass: 'pag_item-active',
          }}
          modules={[Pagination, Autoplay]}
          spaceBetween={0}
          className="hero_slider"
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
              direction: 'vertical',
              spaceBetween: 0,
            },

            0: {
              direction: 'horizontal',
              spaceBetween: 40,
            },
          }}
        >
          {imgRefs.map(item => (
            <SwiperSlide className="item" key={item.id}>
              <HeroItem imgRef={item.ref} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;
