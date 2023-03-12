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
        <Route path="/bruden" element={<HomePage />} />

        <Route path="/bruden/shop" element={<ShopPage />} />

        <Route path="/bruden/blog" element={<BlogPage />} />

        <Route path="/bruden/about" element={<AboutPage />} />

        <Route path="/bruden/contact" element={<ContactPage />} />

        <Route path="/bruden/auth" element={<AuthPage />} />

        <Route element={<PrivateRoute />}>
          <Route path="/bruden/cart" element={<CartPage />} />
        </Route>

        <Route element={<PublicRoute />}>
          <Route path="/bruden/login" element={<LoginPage />} />

          <Route path="/bruden/register" element={<RegisterPage />} />
        </Route>

        <Route path="/bruden/admin/*" element={<AdminPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
