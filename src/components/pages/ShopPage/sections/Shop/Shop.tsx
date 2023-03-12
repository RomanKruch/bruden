import { useState, useEffect } from "react";
import FilterByPrice from "../FilterByPrice/FilterByPrice";
import ProductTag from "../ProductTag/ProductTag";
import SortBar from "../SortBar/SortBar";
import PaginationControls from "../../../../PaginationControls/PaginationControls";
import ShopGridItem from "./ShopGridItem/ShopGridItem";
import ShopListItem from "./ShopListItem/ShopListItem";
import { TListView, TSelectValues, TPriceFilterValue, ITag, IProduct } from "../../../../../Types";
import { useSelector, useDispatch } from "react-redux";
import { onGetTags } from "../../../../redux/tags/tagsOperations";
import { IState } from "../../../../redux/store";
import './Shop.scss';
import axios from "axios";


const Shop = () => {
    const [priceFilterValue, setPriceFilterValue] = useState<TPriceFilterValue>([0, 9999]);
    const [listView, setListView] = useState<TListView>('grid');
    const [sortValue, setSortValue] = useState<TSelectValues>('def');
    const [currentPage, setCurrentPage] = useState(1);
    const [limit, setLimit] = useState<number | null>(null)
    const [products, setProducts] = useState<IProduct[]>([]);

    const dispatch = useDispatch();
    const tags = useSelector((state: IState) => state.tags)

    useEffect(() => {
        // axios.get('/admin/tag')
        // .then(({ data }) => setTags(data.data.tags.map((item: ITag) => ({...item, active: false}))))

        if (!tags.length) {
            dispatch<any>(onGetTags())
        }
    }, [])

    useEffect(() => {
        const perPage = listView === 'grid' ? '6' : '2';
        const activeTags = tags.filter(tag => tag.active).map(tag => tag._id);
        let sortOpt = null;

        switch (sortValue) {
            case 'priceUp' : 
                sortOpt = '&sortBy=price';
                break;
            case 'priceDown' :  
                sortOpt = '&sortByDesc=price';
                break;
            case 'rating' : 
                sortOpt ='' 
                break;
            default : 
                sortOpt ='' 
                break
        }

        axios.get(`/products?page=${currentPage}&perPage=${perPage}&filter=${priceFilterValue.join('|')}${activeTags.length ? `&tags=${activeTags.join('|')}` : ''}${sortOpt}`)
        .then(({data}) => {
            setProducts(data.data.products)
            setLimit(data.data.totalPages)
        })
    }, [currentPage, listView, priceFilterValue, tags, sortValue])

    // const filteredByPrice = products?.filter(item => item.price>priceFilterValue[0] && item.price<priceFilterValue[1]);
    // const tagsEmpty = tags.some(tag => tag.active);
    // const filteredByTags = tagsEmpty ? filteredByPrice.filter(item => tags.some(tag => tag.tag === item.tag && tag.active)) : filteredByPrice;

    // switch (sortValue) {
    //     case 'priceUp' : 
    //         filteredByTags.sort((a, b) => a.price - b.price); 
    //         break;
    //     case 'priceDown' :  
    //         filteredByTags.sort((a, b) => b.price - a.price); 
    //         break;
    //     case 'rating' : 
    //         break;
    // }

    return (
        <section className="shop">
            <div className="container">
                <h1 className="shop_title">Shop</h1>
                <div className="shop_aside">
                    <FilterByPrice setPriceFilterValue={setPriceFilterValue}/>

                    <ProductTag tags={tags}/>
                </div>
                <div className="shop_main">
                    <SortBar 
                        listView={listView} 
                        setListView={setListView}
                        sortValue={sortValue}
                        setSortValue={setSortValue}
                    />
                    <ul className={`shop_list-${listView}`}>
                        {products?.map(product => {
                            return listView === 'grid' ? (
                                <ShopGridItem 
                                    product={product}
                                    key={product._id}
                                    small={true}
                                />
                            ) : (
                                <ShopListItem 
                                    product={product}
                                    key={product._id}
                                />
                            )})}
                    </ul>
                    <PaginationControls limit={limit} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
                </div>
            </div>
        </section>
)};

export default Shop;