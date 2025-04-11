import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import HeroItem from '../../components/HeroItem/HeroItem';
import { HeroData } from './Hero.data';
import './Hero.scss';

export interface IHeroItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
}

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
          {HeroData.map(item => (
            <SwiperSlide className="item" key={item.id}>
              <HeroItem item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;
