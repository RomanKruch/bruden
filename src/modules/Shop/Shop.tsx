import { useState, useEffect } from 'react';
import FilterByPrice from '../../components/FilterByPrice/FilterByPrice';
import ProductTag from '../../components/ProductTag/ProductTag';
import SortBar from '../../components/SortBar/SortBar';
import PaginationControls from '../../UI/PaginationControls/PaginationControls';
import ShopGridItem from '../../components/ProductGridItem/ProductGridItem';
import ShopListItem from '../../components/ProductListItem/ProductListItem';
import {
  TListView,
  TSelectValues,
  TPriceFilterValue,
  IProduct,
} from '../../types/Types';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { onGetTags } from '../../redux/tags/tagsOperations';
import './Shop.scss';
import axios from 'axios';

const Shop = () => {
  const [priceFilterValue, setPriceFilterValue] = useState<TPriceFilterValue>([
    0, 9999,
  ]);
  const [listView, setListView] = useState<TListView>('grid');
  const [sortValue, setSortValue] = useState<TSelectValues>('def');
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState<number | null>(null);
  const [products, setProducts] = useState<IProduct[]>([]);

  const dispatch = useAppDispatch();
  const tags = useAppSelector(state => state.tags);

  useEffect(() => {
    if (!tags.length) {
      dispatch(onGetTags());
    }
  }, [dispatch, tags.length]);

  useEffect(() => {
    const perPage = listView === 'grid' ? '6' : '2';
    const activeTags = tags.filter(tag => tag.active).map(tag => tag._id);
    let sortOpt = null;

    switch (sortValue) {
      case 'priceUp':
        sortOpt = '&sortBy=price';
        break;
      case 'priceDown':
        sortOpt = '&sortByDesc=price';
        break;
      case 'rating':
        sortOpt = '';
        break;
      default:
        sortOpt = '';
        break;
    }

    axios
      .get(
        `/products?page=${currentPage}&limit=${perPage}&filter=${priceFilterValue.join(
          '|',
        )}${
          activeTags.length ? `&tags=${activeTags.join('|')}` : ''
        }${sortOpt}`,
      )
      .then(({ data }) => {
        setProducts(data.products);
        setLimit(data.total);
      });
  }, [currentPage, listView, priceFilterValue, tags, sortValue]);

  return (
    <section className="shop">
      <div className="container">
        <h1 className="shop_title">Shop</h1>
        <div className="shop_aside">
          <FilterByPrice setPriceFilterValue={setPriceFilterValue} />

          <ProductTag tags={tags} />
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
                <ShopListItem product={product} key={product._id} />
              );
            })}
          </ul>
          <PaginationControls
            limit={limit}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </section>
  );
};

export default Shop;
