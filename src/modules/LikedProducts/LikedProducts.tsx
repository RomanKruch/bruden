import { useState } from 'react';
import { useSelector } from 'react-redux';
import { IState } from '../../redux/store';
import ProductGridItem from '../../components/ProductGridItem/ProductGridItem';
import SectionTitle from '../../UI/SectionTitle/SectionTitle';
import './LikedProducts.scss';

const LikedProducts = () => {
  const [viewAll, setViewAll] = useState(false);

  const products = useSelector((state: IState) => state.user.liked);
  const shortProducts = viewAll ? products : products.slice(0, 4);

  return (
    <div className="likedProducts">
      <SectionTitle text="Liked products" className="likedProducts_title" />

      {shortProducts.length !== 0 && (
        <>
          <ul className="likedProducts_list">
            {shortProducts.map(item => (
              <ProductGridItem product={item} key={item._id} />
            ))}
          </ul>

          {products.length > 4 && (
            <button
              className="likedProducts_btn"
              onClick={() => setViewAll(state => !state)}
            >
              {viewAll ? 'View short' : 'View all...'}
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default LikedProducts;
