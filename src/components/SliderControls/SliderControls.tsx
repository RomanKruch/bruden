import {ReactComponent as Left} from '../../assets/icons/shopByCategory/left-btn.svg';
import {ReactComponent as Right} from '../../assets/icons/shopByCategory/right-btn.svg';
import "./SliderControls.scss";

interface IProps {
    prevClass: string;
    nextClass: string;
}

const SliderControls = ({ nextClass, prevClass }: IProps) => {
    return (
    <div className="sliderControls_wrap">
        <button type="button" className={`sliderControls_btn ${prevClass}`}>
            <Left />
        </button>
        <button type="button" className={`sliderControls_btn ${nextClass}`}>
            <Right />
        </button>
    </div>
)};

export default SliderControls;