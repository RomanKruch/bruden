import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/pages/HomePage/HomePage";
import ShopPage from './components/pages/ShopPage';
import BlogPage from "./components/pages/BlogPage";
import AboutPage from "./components/pages/AboutPage";
import ContactPage from "./components/pages/ContactPage";
import AuthPage from "./components/pages/AuthPage";
import CartPage from "./components/pages/CartPage";

function App() {
  return (
    <>
      <Header/>

      <Routes>
        <Route path="/" element={<HomePage />}/>

        <Route path="/shop" element={<ShopPage />}/>

        <Route path="/blog" element={<BlogPage />}/>

        <Route path="/about" element={<AboutPage />}/>

        <Route path="/contact" element={<ContactPage />}/>

        <Route path="/auth" element={<AuthPage />}/>

        <Route path="/cart" element={<CartPage />}/>

      </Routes>
    </>
  );
}

export default App;
