import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import hero1 from '../../assets/images/hero/hero1.png';
import hero2 from '../../assets/images/hero/hero2.png';
import hero3 from '../../assets/images/hero/hero3.png';
import hero4 from '../../assets/images/hero/hero4.png';
import './Hero.scss';
import HeroItem from '../../components/HeroItem/HeroItem';

export interface IHeroItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
}

const data: IHeroItem[] = [
  {
    id: 'hero1',
    title: 'Bags for the Bold',
    subtitle:
      'Exclusive accessories for connoisseurs of style. Designed in Montreal, Bruden’s backpacks embody luxury fashion with unmatched comfort and versatility.',
    image: hero1,
  },
  {
    id: 'hero2',
    title: 'Sunglasses with Edge',
    subtitle:
      'Step into the light with frames that fuse timeless elegance and modern attitude—crafted for visionaries.',

    image: hero2,
  },
  {
    id: 'hero3',
    title: 'Belts that Define',
    subtitle:
      'From clean minimalism to bold statements, Bruden belts complete your look with precision and refined style.',
    image: hero3,
  },
  {
    id: 'hero4',
    title: 'Jewelry that Speaks',
    subtitle:
      'Crafted to captivate, Bruden’s jewelry pairs understated luxury with expressive design for the modern aesthete.',
    image: hero4,
  },
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
          {data.map(item => (
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
