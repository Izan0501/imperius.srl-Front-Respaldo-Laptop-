import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Store from "./pages/Store"
import Blog from './pages/Blog';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import ForgotPassword from "./pages/ForgotPassword"
import Signup from './pages/Signup';
import ResetPassword from './pages/ResetPassword';
import SpecificBlog from './pages/SpecificBlog';
import SpecificProduct from './pages/SpecificProduct';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='product' element={<Store />} />
            <Route path='blog' element={<Blog />} />
            <Route path='wishlist' element={<Wishlist />} />
            <Route path='login' element={<Login />} />
            <Route path='forgot-password' element={<ForgotPassword />} />
            <Route path='signup' element={<Signup />} />
            <Route path='reset-password' element={<ResetPassword />} />
            <Route path='specific-blog' element={<SpecificBlog />} />
            <Route path='product/:id' element={<SpecificProduct />} />
            <Route path='cart' element={<Cart/>} />
            <Route path='checkout' element={<Checkout/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
