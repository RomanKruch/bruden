import ShopNowBtn from '../../UI/ShopNowBtn/ShopNowBtn';
import './FitsAnyStyle.scss';

const FitsAnyStyle = () => (
  <section className="firstAnyStyle">
    <div className="container">
      <div className="firstAnyStyle_wrap">
        <div className="firstAnyStyle_textWrap">
          <h2 className="firstAnyStyle_title">Modern Essentials</h2>
          <p className="firstAnyStyle_description">
            Born in Montreal. Loved around the world.
          </p>

          <ShopNowBtn type="white" className='firstAnyStyle_btn'/>
        </div>
        <img
          src="https://res.cloudinary.com/drn4sj8ju/image/upload/v1744389863/Bruden/fits-any-style_rmiypl.png"
          alt="img"
          className="firstAnyStyle_img"
        />
      </div>
    </div>
  </section>
);

export default FitsAnyStyle;
