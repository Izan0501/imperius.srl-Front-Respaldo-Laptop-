import React, { useContext, useState } from 'react';
import '../App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from "../pages/Home"
import Contact from "../pages/Contact"
import About from "../pages/About"
import Store from "../pages/Store"
import Blog from '../pages/Blog';
import Wishlist from '../pages/Wishlist';
import Login from '../pages/Login';
import ForgotPassword from "../pages/ForgotPassword"
import Signup from '../pages/Signup';
import ResetPassword from '../pages/ResetPassword';
import SpecificBlog from '../pages/SpecificBlog';
import SpecificProduct from '../pages/SpecificProduct';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import { AuthContext } from '../context/AuthContext';
import Swal from 'sweetalert2'

function App() {

  const { user } = useContext(AuthContext);

  const [cartProducts, setCartProducts] = useState([]);

  const addProductToCart = (product) => {
    const index = cartProducts.findIndex((item) => item._id === product._id);
    if (index === -1) {
      setCartProducts((old) => [...old, product]);
    } else {
      const increaseQuantity = cartProducts.map((item) =>
        item._id === product._id ? { ...item, amount: item.amount + 1 } : item
      );
      setCartProducts(increaseQuantity);
    }

    Swal.fire({
      title: 'Your product was added correctly!',
      icon: 'success',
      confirmButtonText: 'Cool'
    })
  };

  const deleteProduct = (_id) => {
    const foundId = cartProducts.find((item) => item._id === _id);

    const newCart = cartProducts.filter((item) => {
      return item !== foundId;
    });

    setCartProducts(newCart);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout cartProducts={cartProducts} />}>
          <Route index element={<Home />} />
          <Route path='*' element={<Signup />} />
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
          <Route path='product/:id' element={<SpecificProduct addProductToCart={addProductToCart} />} />
          {user ? (
            <>
              <Route
                path='cart'
                element={
                  <Cart 
                  cartProducts={cartProducts} 
                  deleteProduct={deleteProduct}
                  />
                }
              />
              <Route path='checkout' element={<Checkout />} />
            </>
          ) : null
          }
        </Route>
      </Routes>
    </>
  );
}

export default App;