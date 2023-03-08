import { nanoid } from "nanoid";
import { useRef, useState, useEffect } from 'react';
import SectionTitle from "../../../../SectionTitle/SectionTitle";
import DealOfWeekItem from "./DealOfWeekItem";
import './DealOfWeek.scss';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import { Swiper as SwiperType, Navigation } from "swiper";
import SliderControls from '../../../../SliderControls/SliderControls';
import { IProduct } from "../../../../../Types";
import axios from "axios";


const DealOfWeek = () => {
    const swiperRef = useRef<SwiperType>();
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        axios.get('/products')
        .then(({ data }) => setProducts(data.data.products))
    }, [])

    return (
    <section className="dealOfWeek">
        <div className="container">
            <SectionTitle text="Deal of the week"/>

            <Swiper 
                navigation={false}
                spaceBetween={40}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                modules={[Navigation]}
                slidesPerView={window.outerWidth < 1200 ? 1 : 2} 
                className="dealOfWeek_slider"
            >
                {products.map(item => (
                    <SwiperSlide key={nanoid()} className="dealOfWeek_item">
                        <DealOfWeekItem product={item}/>
                    </SwiperSlide>
                ))}
            </Swiper>

            <SliderControls swiperRef={swiperRef} maxIndex={products.length-1}/>
        </div>
    </section>
)};

export default DealOfWeek;