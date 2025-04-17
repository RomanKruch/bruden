import { Route, Routes, NavLink, useNavigate } from 'react-router-dom';
import AddProductForm from '../../modules/AddProductForm/AddProductForm';
import AddTagForm from '../../modules/AddTagForm/AddTagForm';
import './AdminPage.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAppDispatch } from '../../redux/hooks';
import ProductModal from '../../components/ProductModal/ProductModal';
import { onAxiosError } from '../../helpers/onAxiosError';
import Loader from '../../UI/Loader/Loader';

const AdminPage = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios
      .get('users/isAdmin')
      .catch(err => {
        onAxiosError(err, dispatch);
        navigate('/');
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="adminPage">
      <div className="container">
        {loading ? (
          <Loader />
        ) : (
          <nav className="adminPage_navigation">
            <NavLink
              to="/admin/product"
              className={({ isActive }) =>
                isActive ? 'nav_link-active nav_link' : 'nav_link'
              }
            >
              Product
            </NavLink>
            <NavLink
              to="/admin/tag"
              className={({ isActive }) =>
                isActive ? 'nav_link-active nav_link' : 'nav_link'
              }
            >
              Tag
            </NavLink>
          </nav>
        )}

        <Routes>
          <Route path="product" element={<AddProductForm />}>
            <Route path=":id" element={<ProductModal />} />
          </Route>
          <Route path="tag" element={<AddTagForm />}>
            <Route path=":id" element={<ProductModal />} />
          </Route>
        </Routes>
      </div>
    </main>
  );
};

export default AdminPage;
