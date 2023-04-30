import { nanoid } from 'nanoid';
import { useRef } from 'react';
import SectionTitle from '../../UI/SectionTitle/SectionTitle';
import imgRef1 from '../../../../../images/lastNews/Latest-news1.png'
import imgRef2 from '../../../../../images/lastNews/Latest-news2.png'
import imgRef3 from '../../../../../images/lastNews/Latest-news3.png'
import './LastNews.scss';
import LastNewsItem from '../../components/LastNewsItem/LastNewsItem';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import { Swiper as SwiperType, Navigation } from "swiper";
import SliderControls from '../../components/SliderControls/SliderControls';

const news = [
    {
        imgRef: imgRef1,
        data: 'April 3 - 2 min read',
        title: 'Bruden Mode Is Taking Care of Women',
        description: 'Bruden Mode in Montreal has taken a lot of time and put a lot of effort into helping women not only look great but to be more healthy.' 
    },
    {
        imgRef: imgRef2,
        data: 'Mar 3 - 2 min read',
        title: 'Bruden Mode Accessories',
        description: 'Finding the perfect little thing that compliments your wardrobe can give you the confidence and the feeling you love to be your best.' 
    },
    {
        imgRef: imgRef3,
        data: 'Jan 4 - 3 min read',
        title: 'Different Types of Backpacks',
        description: 'Different backpacks do different things and serve various purposes.' 
    },
    {
        imgRef: imgRef1,
        data: 'April 3 - 2 min read',
        title: 'Bruden Mode Is Taking Care of Women',
        description: 'Bruden Mode in Montreal has taken a lot of time and put a lot of effort into helping women not only look great but to be more healthy.' 
    },
    {
        imgRef: imgRef2,
        data: 'Mar 3 - 2 min read',
        title: 'Bruden Mode Accessories',
        description: 'Finding the perfect little thing that compliments your wardrobe can give you the confidence and the feeling you love to be your best.' 
    },
    {
        imgRef: imgRef3,
        data: 'Jan 4 - 3 min read',
        title: 'Different Types of Backpacks',
        description: 'Different backpacks do different things and serve various purposes.' 
    },
]

const LastNews = () => {
    const swiperRef = useRef<SwiperType>();

    return (
    <section className="lastNews">
        <div className="container">
            <SectionTitle text='Latest news'/>

            {/* <ul className="lastNews_slider">
                <li className="lastNews_item">
                    <p className="lastNews_item_data">April 3 - 2 min read</p>
                    <img src={imgRef1} alt="img" className='lastNews_item_img'/>
                    <h3 className="lastNews_item_title">Bruden Mode Is Taking Care of Women</h3>
                    <p className="lastNews_item_description">Bruden Mode in Montreal has taken a lot of time and put a lot of effort into helping women not only look great but to be more healthy.</p>
                    <a href="#" className="lastNews_item_link">Read more</a>
                </li>
                <li className="lastNews_item">
                    <p className="lastNews_item_data">April 3 - 2 min read</p>
                    <img src={imgRef1} alt="img" className='lastNews_item_img'/>
                    <h3 className="lastNews_item_title">Bruden Mode Is Taking Care of Women</h3>
                    <p className="lastNews_item_description">Bruden Mode in Montreal has taken a lot of time and put a lot of effort into helping women not only look great but to be more healthy.</p>
                    <a href="#" className="lastNews_item_link">Read more</a>
                </li>
                <li className="lastNews_item">
                    <p className="lastNews_item_data">April 3 - 2 min read</p>
                    <img src={imgRef1} alt="img" className='lastNews_item_img'/>
                    <h3 className="lastNews_item_title">Bruden Mode Is Taking Care of Women</h3>
                    <p className="lastNews_item_description">Bruden Mode in Montreal has taken a lot of time and put a lot of effort into helping women not only look great but to be more healthy.</p>
                    <a href="#" className="lastNews_item_link">Read more</a>
                </li>
            </ul> */}

            <Swiper 
                navigation={false}
                spaceBetween={40}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                modules={[Navigation]}
                slidesPerView={3} 
                className="lastNews_slider"
            >
                {news.map(({ imgRef, title, description, data}) => (
                    <SwiperSlide key={nanoid()} className='lastNews_item'>
                        <LastNewsItem imgRef={imgRef} title={title} data={data} description={description}/>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* <SliderControls swiperRef={swiperRef} maxIndex={news.length-2}/> */}
        </div>
    </section>
)};

export default LastNews;