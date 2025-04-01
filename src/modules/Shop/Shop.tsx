import { useState, useEffect, useMemo } from 'react';
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

  const activeTags = useMemo(
    () => tags.filter(tag => tag.active).map(tag => tag._id),
    [tags],
  );

  const sortParams = useMemo(() => {
    switch (sortValue) {
      case 'priceUp':
        return { sortBy: 'price' };
      case 'priceDown':
        return { sortByDesc: 'price' };
      default:
        return {};
    }
  }, [sortValue]);

  useEffect(() => {
    if (!tags.length) {
      dispatch(onGetTags());
    }
  }, [dispatch, tags.length]);

  useEffect(() => {
    const limit = listView === 'grid' ? 6 : 2;

    axios
      .get('/products', {
        params: {
          page: currentPage,
          limit,
          filter: priceFilterValue.join('|'),
          ...(activeTags.length && { tags: activeTags.join('|') }),
          ...sortParams,
        },
      })
      .then(({ data }) => {
        setProducts(data.products);
        setLimit(data.total);
      });
  }, [currentPage, listView, priceFilterValue, activeTags, sortParams]);

  useEffect(() => {
    if (currentPage !== 1) setCurrentPage(1);
  }, [listView, sortValue, activeTags, priceFilterValue]);

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
