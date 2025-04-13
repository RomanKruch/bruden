import ShopNowBtn from '../../UI/ShopNowBtn/ShopNowBtn';
import './Baner.scss';

const Baner = () => (
  <section className="baner">
    <div className="container">
      <div className="baner_firstItem baner_item">
        <h3 className="baner_firstItem_title">
          Bruden redefines <br /> everyday luxury.
        </h3>

        <ShopNowBtn type="transparentWhite" className="baner_firstItem_btn" />
      </div>

      <div className="baner_secondItem baner_item">
        <h3 className="baner_secondItem_title">
          Crafted for <br /> bold style.
        </h3>

        <ShopNowBtn type="transparentWhite" className="baner_secondItem_btn" />
      </div>
    </div>
  </section>
);

export default Baner;
