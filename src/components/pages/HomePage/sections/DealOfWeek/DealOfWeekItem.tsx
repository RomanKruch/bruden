import AddToCartBtn from "../../../../AddToCartBtn/AddToCartBtn";
import {ReactComponent as Eye} from '../../../../../icons/dealOfWeek/Deal-of-the-week-eye.svg';
import {ReactComponent as Heart} from '../../../../../icons/dealOfWeek/Deal-of-the-week-heart.svg';

interface IProps {
    imgRef: string;
    title: string;
}

const DealOfWeekItem = ({ imgRef, title }: IProps) => (
    <>
        <img src={imgRef} alt="img" width={260} height={340}/>
        <div className="dealOfWeek_item_wrap">
            <h3 className="dealOfWeek_item_title">{title}</h3>
            <div className="dealOfWeek_item_rating"></div>
            <p className="dealOfWeek_item_price">C$ 99.99</p>
            <span className="dealOfWeek_item_line"></span>
            <p className="dealOfWeek_item_description">Bruden's Backpack will give all your essentials a home while still feeling comfortable and having a... </p>
            <div className="dealOfWeek_item_btn_wrap">
                <AddToCartBtn className='dealOfWeek_item_btn'/>
                <button className="dealOfWeek_item_iconBtn">
                    <Heart/>
                </button>
                <button className="dealOfWeek_item_iconBtn">
                    <Eye/>
                </button>
            </div>
        </div>
    </>
);

export default DealOfWeekItem;