import ShopNowBtn from "../../UI/ShopNowBtn/ShopNowBtn";
import "./Baner.scss"

const Baner = () => (
    <section className="baner">
        <div className="container">
            <div className="baner_firstItem baner_item">
                <div className="baner_firstItem_wrap">
                    <h3 className="baner_firstItem_title">New arrival</h3>
                    <p className="baner_firstItem_subtitle">Exclusive Denisha Bruce Red Backpack Launch</p>
                </div>

                <ShopNowBtn type="transparentBlack" className="baner_firstItem_btn"/>
            </div>

            <div className="baner_secondItem baner_item">
                <h3 className="baner_secondItem_title">An addition to all your fits</h3>

                <ShopNowBtn type="transparentWhite" className="baner_secondItem_btn"/>
            </div>
        </div>
    </section>
);

export default Baner;