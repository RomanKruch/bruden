import { useState } from 'react'
import {ReactComponent as Left} from '../../icons/shopByCategory/left-btn.svg';
import {ReactComponent as Right} from '../../icons/shopByCategory/right-btn.svg';
import { Swiper as SwiperType } from "swiper";
import "./SliderControls.scss";

interface IProps {
    swiperRef: React.MutableRefObject<SwiperType | undefined>;
    maxIndex: number; 
}

const SliderControls = ({ swiperRef, maxIndex }: IProps) => {
    const [disablePrev, setDisablePrev] = useState(true);
    const [disableNext, setDisableNext] = useState(false);

    const onPrev = () => {
        const activeIndex = swiperRef.current?.activeIndex || 0;

        if (activeIndex-1 === 0) {
            setDisablePrev(true);
        }

        setDisableNext(false);
        swiperRef.current?.slidePrev();
    }

    const onNext = () => {
        const activeIndex = swiperRef.current?.activeIndex || 0;

        if (activeIndex+2 === maxIndex) {
            setDisableNext(true);
        }

        setDisablePrev(false);
        swiperRef.current?.slideNext();
    }

    return (
    <div className="sliderControls_wrap">
        <button type="button" onClick={onPrev} disabled={disablePrev} className="sliderControls_btn">
            <Left />
        </button>
        <button type="button" onClick={onNext} disabled={disableNext} className="sliderControls_btn">
            <Right />
        </button>
    </div>
)};

export default SliderControls;