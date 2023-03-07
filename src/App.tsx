import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Header from './components/Header';
import HomePage from './components/pages/HomePage/HomePage';
import ShopPage from './components/pages/ShopPage/ShopPage';
import BlogPage from './components/pages/BlogPage';
import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/ContactPage';
import LoginPage from './components/pages/LoginPage/LoginPage';
import RegisterPage from './components/pages/RegisterPage/RegisterPage';
import AuthPage from './components/pages/AuthPage/AuthPage';
import CartPage from './components/pages/CartPage/CartPage';
import AdminPage from './components/pages/AdminPage/AdminPage';
import Footer from './components/Footer/Footer';

import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { onRefresh } from './components/redux/user/userOperations';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<any>(onRefresh())
  }, [])

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/shop" element={<ShopPage />} />

        <Route path="/blog" element={<BlogPage />} />

        <Route path="/about" element={<AboutPage />} />

        <Route path="/contact" element={<ContactPage />} />

        <Route path="/auth" element={<AuthPage />} />

        <Route element={<PrivateRoute />}>
          <Route path="/cart" element={<CartPage />} />
        </Route>

        <Route element={<PublicRoute />}>
          <Route path="/login" element={<LoginPage />} />

          <Route path="/register" element={<RegisterPage />} />
        </Route>

        <Route path="/admin/*" element={<AdminPage />} />
      </Routes>

      {/* <Footer /> */}
    </>
  );
}

export default App;
