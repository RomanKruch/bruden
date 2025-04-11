import { useState, useEffect } from 'react';
import SectionTitle from '../../UI/SectionTitle/SectionTitle';
import DealOfWeekItem from '../../components/DealOfWeekItem/DealOfWeekItem';
import './DealOfWeek.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import SliderControls from '../../components/SliderControls/SliderControls';
import { IProduct } from '../../types/Types';
import axios from 'axios';
import Loader from '../../UI/Loader/Loader';

const DealOfWeek = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get('/products?limit=10&sortByDesc=rating')
      .then(({ data }) => setProducts(data.products))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="dealOfWeek">
      <div className="container">
        <SectionTitle text="Deal of the week" className="dealOfWeek_title" />

        {loading ? (
          <Loader />
        ) : (
          <>
            <Swiper
              key="dealOfWeek"
              navigation={{
                nextEl: '.dealOfWeek_control_next',
                prevEl: '.dealOfWeek_control_prev',
              }}
              spaceBetween={40}
              breakpoints={{
                1200: {
                  slidesPerView: 2,
                },

                0: {
                  slidesPerView: 1,
                },
              }}
              modules={[Navigation]}
              slidesPerView={2}
              className="dealOfWeek_slider"
            >
              {products.map(item => (
                <SwiperSlide key={item._id} className="dealOfWeek_item">
                  <DealOfWeekItem product={item} />
                </SwiperSlide>
              ))}
            </Swiper>
            <SliderControls
              nextClass="dealOfWeek_control_next"
              prevClass="dealOfWeek_control_prev"
            />
          </>
        )}
      </div>
    </section>
  );
};

export default DealOfWeek;
