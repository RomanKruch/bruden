import { useRef } from 'react';
import { nanoid } from "nanoid";
import SectionTitle from "../../../../SectionTitle/SectionTitle";
import ShopByCategorySliderItem from "./ShopByCategorySliderItem";
import imgRef1 from '../../../../../images/shopByCategory/Shop-by-category1.png';
import imgRef2 from '../../../../../images/shopByCategory/Shop-by-category2.png';
import imgRef3 from '../../../../../images/shopByCategory/Shop-by-category3.png';
import './ShopByCategory.scss';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import { Swiper as SwiperType, Navigation } from "swiper";
import SliderControls from '../../../../SliderControls/SliderControls';

const products = [
{
    ref: imgRef1,
    text: 'Bags'
},
{
    ref: imgRef2,
    text: 'Sunglasses'
},
{
    ref: imgRef3,
    text: 'Belts'
},
{
    ref: imgRef1,
    text: 'Bags'
},
{
    ref: imgRef2,
    text: 'Sunglasses'
},
{
    ref: imgRef3,
    text: 'Belts'
},
{
    ref: imgRef1,
    text: 'Bags'
},
{
    ref: imgRef2,
    text: 'Sunglasses'
},
{
    ref: imgRef3,
    text: 'Belts'
},
];

const ShopByCategory = () => {
    const swiperRef = useRef<SwiperType>();

    return (
    <section className="shopByCat">
        <div className="container">
            <SectionTitle text="Shop by category"/>

            <Swiper 
                navigation={false}
                spaceBetween={40}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                modules={[Navigation]}
                slidesPerView={3} 
                className="shopByCat_slider"
            >
                {products.map(({ ref, text}) => (
                    <SwiperSlide key={nanoid()} className='shopByCat_slider_item'>
                        <ShopByCategorySliderItem imgRef={ref} text={text}/>
                    </SwiperSlide>
                ))}
            </Swiper>

            <SliderControls swiperRef={swiperRef} maxIndex={products.length-2}/>
        </div>
    </section>
)}

export default ShopByCategory