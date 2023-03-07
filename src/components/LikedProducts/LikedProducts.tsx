import { useState } from "react";
import { useSelector } from "react-redux";
import { IState } from "../redux/store";
import ShopGridItem from "../pages/ShopPage/sections/Shop/ShopGridItem/ShopGridItem";
import SectionTitle from "../SectionTitle/SectionTitle";
import './LikedProducts.scss'

const LikedProducts = () => {
    const [viewAll, setViewAll] = useState(false);

    const products = useSelector((state: IState) => state.user.liked)
    const shortProducts = viewAll ? products : products.slice(0, 4)

    return (
        <div className="likedProducts">
            <SectionTitle text="Liked products" className="likedProducts_title"/>

           {shortProducts.length !== 0 && <>
            <ul className="likedProducts_list">
                {shortProducts.map(item => (
                    <ShopGridItem product={item} key={item._id}/>
                ))}
            </ul>

            <button className="likedProducts_btn" onClick={() => setViewAll(state => !state)}>{viewAll ? 'View short' : 'View all...'}</button></>}
        </div>
    )
}

export default LikedProducts;