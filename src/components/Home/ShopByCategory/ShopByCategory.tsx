import SectionTitle from "../../SectionTitle/SectionTitle";
import imgRef1 from '../../../images/shopByCategory/Shop-by-category1.png';
import imgRef2 from '../../../images/shopByCategory/Shop-by-category2.png';
import imgRef3 from '../../../images/shopByCategory/Shop-by-category3.png';
import {ReactComponent as Left} from '../../../icons/shopByCategory/left-btn.svg';
import {ReactComponent as Right} from '../../../icons/shopByCategory/right-btn.svg';
import './ShopByCategory.scss'

const ShopByCategory = () => (
    <section className="shopByCat">
        <div className="container">
            <SectionTitle text="Shop by category"/>

            <ul className="shopByCat_list">
                <li className="shopByCat_item">
                    <img src={imgRef1} alt="Bags" width='360' height='290'/>
                    <h3 className="shopByCat_item_title">Bags</h3>
                </li>
                <li className="shopByCat_item">
                    <img src={imgRef2} alt="Sunglasses" width='360' height='290'/>
                    <h3 className="shopByCat_item_title">Sunglasses</h3>
                </li>
                <li className="shopByCat_item">
                    <img src={imgRef3} alt="Belts" width='360' height='290'/>
                    <h3 className="shopByCat_item_title">Belts</h3>
                </li>
            </ul>
            <div className="shopByCat_btn_wrap">
                <button type="button" className="shopByCat_btn">
                    <Left />
                </button>
                <button type="button" className="shopByCat_btn">
                    <Right />
                </button>
            </div>
        </div>
    </section>
)

export default ShopByCategory