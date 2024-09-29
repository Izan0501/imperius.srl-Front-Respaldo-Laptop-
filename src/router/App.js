import React, { useContext, useState, useEffect } from 'react';
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
import Order from '../pages/Order';

function App() {

  const { user } = useContext(AuthContext);

  //add product to cart
  const initialProducts = localStorage.getItem
    ('products')
    ? JSON.parse(localStorage.getItem('products'))
    : [];

  const initialWishProducts = localStorage.getItem('wishProducts')
    ? JSON.parse(localStorage.getItem('wishProducts'))
    : [];

  const [cartProducts, setCartProducts] = useState(initialProducts);

  const [wishProducts, setWishProducts] = useState(initialWishProducts);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(cartProducts));
    localStorage.setItem('wishProducts', JSON.stringify(wishProducts))
  }, [cartProducts, wishProducts]);

  const addProductToCart = (product) => {
    if (user) {
      const index = cartProducts.findIndex((item) => item._id === product._id);
      if (index === -1) {
        setCartProducts((old) => [...old, product]);
      } else {
        const increaseQuantity = cartProducts.map((item) =>
          item._id === product._id ? { ...item, amount: item.amount + 1 } : item
        );
        setCartProducts(increaseQuantity);
      }

      if (cartProducts) {
        return (
          Swal.fire({
            title: 'Your product was added correctly!',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        )
      }

    } else {
      return (
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "You need to login!",
        })
      )
    }
  };

  const addFunction = (product) => {
    const productRepeat = cartProducts.find((item) => item._id === product._id);

    if (productRepeat) {
      setCartProducts(
        cartProducts.map((item) =>
          item._id === product._id
            ? { ...product, amount: productRepeat.amount + 1 }
            : item
        )
      );
    }
  };

  const decreaseFunction = (product) => {
    const productRepeat = cartProducts.find((item) => item._id === product._id);

    if (productRepeat.amount <= 1) {
      return deleteProduct(productRepeat._id);
    } else {
      setCartProducts(
        cartProducts.map((item) =>
          item._id === product._id
            ? { ...product, amount: productRepeat.amount - 1 }
            : item
        )
      );
    };
  };

  const deleteProduct = (_id) => {
    const foundId = cartProducts.find((item) => item._id === _id);

    const newCart = cartProducts.filter((item) => {
      return item !== foundId;
    });

    setCartProducts(newCart);

    if (newCart) {
      return (
        Swal.fire({
          title: 'Your product was deleted correctly!',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      )
    } else {
      return (
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        })
      )
    }
  };
  //add product to cart ends

  //add product to wishList
  const addProductToList = (product) => {
    if (user) {
      const index = wishProducts.findIndex((item) => item._id === product._id);
      if (index === -1) {
        setWishProducts((old) => [...old, product]);
      } else {
        const increaseQuantity = wishProducts.map((item) =>
          item._id === product._id ? { ...item, amount: item.amount + 1 } : item
        );
        setWishProducts(increaseQuantity);
      }

      Swal.fire({
        title: 'your product is saved in the list!',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
    } else {
      return (
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "You need to login!",
        })
      )
    }
  };

  // delete wishProduct function
  const deleteFavProduct = (_id) => {
    const foundId = wishProducts.find((item) => item._id === _id);

    const newCart = wishProducts.filter((item) => {
      return item !== foundId;
    });

    setWishProducts(newCart);

    if (newCart) {
      return (
        Swal.fire({
          title: 'Your product was deleted correctly!',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      )
    } else {
      return (
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        })
      )
    }
  };
  //add product to wishList ends

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout cartProducts={cartProducts} />}>
          <Route index element={<Home />} />
          <Route path='*' element={<Signup />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='product' element={
            <Store />}
          />
          <Route path='blog' element={<Blog />} />
          <Route path='login' element={<Login />} />
          <Route path='forgot-password' element={<ForgotPassword />} />
          <Route path='signup' element={<Signup />} />
          <Route path='reset-password' element={<ResetPassword />} />
          <Route path='specific-blog' element={<SpecificBlog />} />
          <Route path='product/:id' element={<SpecificProduct
            addProductToCart={addProductToCart}
            addProductToList={addProductToList}
          />}
          />
          {user ? (
            <>
              <Route
                path='cart'
                element={
                  <Cart
                    decreaseFunction={decreaseFunction}
                    addFunction={addFunction}
                    cartProducts={cartProducts}
                    deleteProduct={deleteProduct}
                  />
                }
              />
              <Route
                path='wishlist'
                element={
                  <Wishlist
                    deleteFavProduct={deleteFavProduct}
                    wishProducts={wishProducts}
                  />}
              />
              <Route
                element={<Checkout />}
                path='checkout'
              />
              <Route path='order' element={<Order />} />
            </>
          ) : null
          }
        </Route>
      </Routes>
    </>
  );
}

export default App;