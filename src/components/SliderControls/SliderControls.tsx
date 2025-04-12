import Left from '../../assets/icons/left_icon.svg?react';
import Right from '../../assets/icons/right_icon.svg?react';
import './SliderControls.scss';

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
  );
};

export default SliderControls;
