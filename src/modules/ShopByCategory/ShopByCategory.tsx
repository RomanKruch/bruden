import { useEffect } from 'react';
import SectionTitle from '../../UI/SectionTitle/SectionTitle';
import ShopByCategorySliderItem from '../../components/ShopByCategoryItem/ShopByCategoryItem';
import './ShopByCategory.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SliderControls from '../../components/SliderControls/SliderControls';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { onToggleTag } from '../../redux/tags/tagsSlice';
import { onGetTags } from '../../redux/tags/tagsOperations';
import { ITag } from '../../types/Types';

const ShopByCategory = () => {
  const dispatch = useAppDispatch();
  const tags = useAppSelector(state => state.tags);

  useEffect(() => {
    if (!tags.length) {
      dispatch(onGetTags());
    }
  }, [dispatch, tags.length]);

  const onClick = (item: ITag) => {
    return () => dispatch(onToggleTag(item._id));
  };

  return (
    <section className="shopByCat">
      <div className="container">
        <SectionTitle text="Shop by category" />

        <Swiper
          key="shopByCat"
          navigation={{
            nextEl: '.shopByCat_control_next',
            prevEl: '.shopByCat_control_prev',
          }}
          spaceBetween={40}
          modules={[Navigation]}
          slidesPerView={3}
          breakpoints={{
            1000: {
              slidesPerView: 3,
            },

            768: {
              slidesPerView: 2,
            },

            0: {
              slidesPerView: 1,
            },
          }}
          className="shopByCat_slider"
        >
          {tags.map(item => (
            <SwiperSlide
              key={item._id}
              className="shopByCat_slider_item"
              onClick={onClick(item)}
            >
              <ShopByCategorySliderItem tag={item} />
            </SwiperSlide>
          ))}
        </Swiper>

        <SliderControls
          nextClass="shopByCat_control_next"
          prevClass="shopByCat_control_prev"
        />
      </div>
    </section>
  );
};

export default ShopByCategory;
