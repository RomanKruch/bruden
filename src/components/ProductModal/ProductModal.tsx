import { useEffect, useState } from 'react';
import AddToCartBtn from '../../UI/AddToCartBtn/AddToCartBtn';
import { IProduct } from '../../types/Types';
import Modal from '../../UI/Modal/Modal';
import './ProductModal.scss';
import axios from 'axios';
import { useParams, useNavigate, useLocation } from 'react-router-dom';

const ProductModal = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<IProduct | null>(null);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(1);
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`products/${id}`);
        if (!data) {
          navigate('/');
        }
        setProduct(data);
      } catch (err: any) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTours();
  }, []);

  const routeLocation = useLocation();
  const path = routeLocation.state?.from || '/';

  const onClose = () => {
    navigate(path);
  };

  if (product) {
    const { title, description, price, img, tag, _id, totalQty } = product;

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = +e.target.value;

      if (totalQty < value) {
        return setValue(totalQty);
      }
      return setValue(value);
    };
    return (
      <Modal onClose={onClose} loading={loading}>
        <div className="productModal">
          <img src={img.large.ref} width="430" height="560" alt={title} />
          <button
            type="button"
            className="productModal_moreBtn"
            onClick={() => setShowInfo(value => !value)}
          >
            !
          </button>
          <div
            className={`productModal_wrap ${
              showInfo ? 'productModal_wrap-show' : ''
            }`}
          >
            <h2 className="productModal_title">{title}</h2>
            <p className="productModal_price">C$ {price}</p>
            <p className="productModal_description">{description}</p>
            <p className="productModal_stock">{totalQty} in stock</p>
            <form className="productModal_qty">
              <label className="productModal_qty_label" htmlFor={id}>
                Qty:
              </label>
              <input
                type="number"
                id={id}
                className="productModal_qty_inp"
                required
                maxLength={2}
                value={value + ''}
                onChange={onChange}
              />
              <AddToCartBtn id={product._id} qty={+value} />
            </form>
            <div className="productModal_info">
              <p className="productModal_info_item">
                SKU:<span>NHL5-11</span>
              </p>
              <p className="productModal_info_item">
                Categories:<span>{tag.name}</span>
              </p>
              <p className="productModal_info_item">
                Tags:<span>{tag.name}</span>
              </p>
            </div>
          </div>
        </div>
      </Modal>
    );
  }

  return <Modal onClose={onClose} loading={loading}></Modal>;
};

export default ProductModal;
