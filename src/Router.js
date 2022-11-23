import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Cart from './pages/Cart/Cart';
import Main from './pages/Main/Main';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import ProductList from './pages/ProductList/ProductList';
import SignIn from './pages/SignIn/SignIn';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

export default function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product-detail" element={<ProductDetail />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/Nav" element={<SignIn />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
