import { useEffect } from 'react';
import SectionTitle from "../../UI/SectionTitle/SectionTitle";
import ShopByCategorySliderItem from "../../components/ShopByCategoryItem/ShopByCategoryItem";
import './ShopByCategory.scss';

import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper";
import SliderControls from '../../components/SliderControls/SliderControls';
import { nanoid } from 'nanoid';

import { useSelector, useDispatch } from 'react-redux';
import { IState } from '../../redux/store';
import { onToggleTag } from '../../redux/tags/tagsSlice';
import { onGetTags } from '../../redux/tags/tagsOperations';

const PREV_CLASS = nanoid();
const NEXT_CLASS = nanoid();

const ShopByCategory = () => { 
    const dispatch = useDispatch();
    const tags = useSelector((state: IState) => state.tags);

    useEffect(() => {
        if (!tags.length) {
            dispatch<any>(onGetTags())
        }
    }, [dispatch, tags.length])
    

    return (
    <section className="shopByCat">
        <div className="container">
            <SectionTitle text="Shop by category"/>

            <Swiper 
                navigation={{
                    nextEl: `.${NEXT_CLASS}`,
                    prevEl: `.${PREV_CLASS}`
                }}
                spaceBetween={40}
                // modules={[Navigation]}
                slidesPerView={3} 
                breakpoints={{
                    1000: {
                        slidesPerView: 3
                    },

                    768: {
                        slidesPerView: 2
                    },

                    0: {
                        slidesPerView: 1
                    }
                }}
                className="shopByCat_slider"
            >
                {tags.map(item => (
                    <SwiperSlide 
                        key={item._id} 
                        className='shopByCat_slider_item' 
                        onClick={() => dispatch<any>(onToggleTag(item._id))}
                    >
                        <ShopByCategorySliderItem tag={item}/>
                    </SwiperSlide>
                ))}
            </Swiper>

            <SliderControls nextClass={NEXT_CLASS} prevClass={PREV_CLASS}/>
        </div>
    </section>
)}

export default ShopByCategory