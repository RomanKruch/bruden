import { nanoid } from "nanoid";
import { useState, useEffect } from 'react';
import SectionTitle from "../../UI/SectionTitle/SectionTitle";
import DealOfWeekItem from "../../components/DealOfWeekItem/DealOfWeekItem";
import './DealOfWeek.scss';

import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper";
import SliderControls from "../../components/SliderControls/SliderControls";
import { IProduct } from "../../types/Types";
import axios from "axios";

const PREV_CLASS = nanoid();
const NEXT_CLASS = nanoid();

const DealOfWeek = () => {
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        axios.get('/products')
        .then(({ data }) => setProducts(data.products))
    }, [])

    return (
    <section className="dealOfWeek">
        <div className="container">
            <SectionTitle text="Deal of the week"/>

            <Swiper 
                 navigation={{
                    nextEl: `.${NEXT_CLASS}`,
                    prevEl: `.${PREV_CLASS}`
                }}
                spaceBetween={40}
                breakpoints={{
                    1200: {
                        slidesPerView: 2
                    },

                    0: {
                        slidesPerView: 1
                    }
                }}
                // modules={[Navigation]}
                slidesPerView={2} 
                className="dealOfWeek_slider"
            >
                {products.map(item => (
                    <SwiperSlide key={nanoid()} className="dealOfWeek_item">
                        <DealOfWeekItem product={item}/>
                    </SwiperSlide>
                ))}
            </Swiper>

            <SliderControls nextClass={NEXT_CLASS} prevClass={PREV_CLASS}/>
        </div>
    </section>
)};

export default DealOfWeek;