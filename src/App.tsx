import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import {NotificationContainer, NotificationManager} from 'react-notifications';
import Header from './modules/Header';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import BlogPage from './pages/BlogPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
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

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<any>(onRefresh());
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

        <Route path="blog" element={<BlogPage />} />

        <Route path="about" element={<AboutPage />} />

        <Route path="contact" element={<ContactPage />} />

        <Route path="auth" element={<AuthPage />} />

        <Route element={<PrivateRoute />}>
          <Route path="cart" element={<CartPage />} />
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
