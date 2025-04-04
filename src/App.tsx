import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './modules/Header';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import AboutPage from './pages/AboutPage/AboutPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import AuthPage from './pages/AuthPage/AuthPage';
import CartPage from './pages/CartPage/CartPage';
import AdminPage from './pages/AdminPage/AdminPage';
import Footer from './modules/Footer/Footer';
import PrivateRoute from './helpers/PrivateRoute';
import PublicRoute from './helpers/PublicRoute';
import { onRefresh } from './redux/user/userOperations';
import './config/axiosConfig';
import './config/swiperConfig';
import ProductModal from './components/ProductModal/ProductModal';
import { NotificationContainer } from './modules/NotificationContainer/NotificationContainer';
import CartTotalModal from './components/CartTotalModal/CartTotalModal';
import { useAppDispatch } from './redux/hooks';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(onRefresh());
  }, [dispatch]);

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path=":id" element={<ProductModal />} />
        </Route>

        <Route path="shop" element={<ShopPage />}>
          <Route path=":id" element={<ProductModal />} />
        </Route>

        <Route path="about" element={<AboutPage />} />

        <Route path="auth" element={<AuthPage />} />

        <Route element={<PrivateRoute />}>
          <Route path="cart" element={<CartPage />}>
            <Route path="cartTotals" element={<CartTotalModal />} />
          </Route>
        </Route>

        <Route element={<PublicRoute />}>
          <Route path="auth/login" element={<LoginPage />} />

          <Route path="auth/register" element={<RegisterPage />} />
        </Route>

        <Route path="admin/*" element={<AdminPage />} />
      </Routes>

      <Footer />

      <NotificationContainer />
    </>
  );
}

export default App;
