import { useState } from "react";
import FilterByPrice from "../FilterByPrice/FilterByPrice";
import ProductTag from "../ProductTag/ProductTag";
import SortBar from "../SortBar/SortBar";
import ShopGridItem from "./ShopGridItem/ShopGridItem";
import ShopListItem from "./ShopListItem/ShopListItem";
import { TListView, TSelectValues, TPriceFilterValue, ITag } from "./types";
import './Shop.scss';
import products from "../../../../../products";

const InitTags = [
    {
        tag: 'Bags',
        id: 'id-1',
        active: false
    }, 
    {
        tag:'Sunglasses',
        id: 'id-2',
        active: false
    }, 
    {
        tag:'Belts',
        id: 'id-3',
        active: false
    }
];


const Shop = () => {
    const [priceFilterValue, setPriceFilterValue] = useState<TPriceFilterValue>([0, 200]);
    const [tags, setTags] = useState<ITag[]>(InitTags);
    const [listView, setListView] = useState<TListView>('grid');
    const [sortValue, setSortValue] = useState<TSelectValues>('def');

    const filteredByPrice = products.filter(item => item.price>priceFilterValue[0] && item.price<priceFilterValue[1]);
    const tagsEmpty = tags.some(tag => tag.active);
    const filteredByTags = tagsEmpty ? filteredByPrice.filter(item => tags.some(tag => tag.tag === item.tag && tag.active)) : filteredByPrice;

    switch (sortValue) {
        case 'priceUp' : 
            filteredByTags.sort((a, b) => a.price - b.price); 
            break;
        case 'priceDown' : 
            filteredByTags.sort((a, b) => b.price - a.price); 
            break;
        case 'rating' : 
            break;
    }

    return (
        <section className="shop">
            <div className="container">
                <h1 className="shop_title">Shop</h1>
                <div className="shop_aside">
                    <FilterByPrice setPriceFilterValue={setPriceFilterValue}/>

                    <ProductTag tags={tags} setTags={setTags}/>
                </div>
                <div className="shop_main">
                    <SortBar 
                        listView={listView} 
                        setListView={setListView}
                        sortValue={sortValue}
                        setSortValue={setSortValue}
                    />
                    <ul className={`shop_list-${listView}`}>
                        {filteredByTags.map(product => {
                            return listView === 'grid' ? (
                                <ShopGridItem 
                                    product={product}
                                    key={product.id}
                                />
                            ) : (
                                <ShopListItem 
                                    product={product}
                                    key={product.id}
                                />
                            )})}
                    </ul>
                </div>
            </div>
        </section>
)};

export default Shop;