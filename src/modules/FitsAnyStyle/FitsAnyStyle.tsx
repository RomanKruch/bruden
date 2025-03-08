import ShopNowBtn from "../../UI/ShopNowBtn/ShopNowBtn";
import imgRef from '../../assets/images/fitsAnyStyle/fits-any-style.png'
import './FitsAnyStyle.scss'

const FitsAnyStyle = () => (
    <section className="firstAnyStyle">
        <div className="container">
            <div className="firstAnyStyle_wrap">
                <div className="firstAnyStyle_textWrap">
                    <h2 className="firstAnyStyle_title">Fits any style</h2>
                    <p className="firstAnyStyle_description">Precise fit on sliding buckle with no holes</p>

                    <ShopNowBtn type="white"/>
                </div>
                <img src={imgRef} alt="img" />
            </div>
        </div>
    </section>
);

export default FitsAnyStyle;