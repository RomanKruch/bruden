import { useRef, useEffect } from 'react';
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

import { useSelector, useDispatch } from 'react-redux';
import { IState } from '../../../../redux/store';
import { onToggleTag } from '../../../../redux/tags/tagsSlice';
import { onGetTags } from '../../../../redux/tags/tagsOperations';

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
    const dispatch = useDispatch();
    const tags = useSelector((state: IState) => state.tags)

    const onClick = (id: string) => {
        dispatch<any>(onToggleTag(id))
    }
    useEffect(() => {
        if (!tags.length) {
            dispatch<any>(onGetTags())
        }
    }, [])
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
                {tags.map(item => (
                    <SwiperSlide key={item._id} className='shopByCat_slider_item' onClick={() => onClick(item._id)}>
                        <ShopByCategorySliderItem tag={item}/>
                    </SwiperSlide>
                ))}
            </Swiper>

            <SliderControls swiperRef={swiperRef} maxIndex={products.length-2}/>
        </div>
    </section>
)}

export default ShopByCategory