import React, { useState } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import BackToTop from "../back-to-top/BackToTop";
import Footer from "../footer/Footer";
import HeadingHeader from "../heading-header/HeadingHeader";
import NavBar from "../navbar/NavBar";

const Layout = () => {
  const { products, categories } = useLoaderData();
  const [cart, setCart] = useState([]);

  const addToCart = (productId, quantity = 1) => {
    const itemIndex = cart.findIndex((item) => item.productId === productId);

    if (itemIndex !== -1) {
      const newItem = { ...cart[itemIndex] };
      newItem.quantity += quantity;

      const newCart = [...cart];
      newCart[itemIndex] = newItem;

      setCart(newCart);
    } else {
      setCart([...cart, { productId, quantity }]);
    }
  };

  const deleteProduct = (productId) => {
    if (confirm("Are you sure you want to delete this product?")) {
      const newCart = cart.filter((pr) => pr.productId !== productId);
      setCart(newCart);
    }
  };

  const increment = (productId) => {
    const index = cart.findIndex((item) => item.productId === productId);

    if (index !== -1) {
      const newCart = [...cart];

      const newItem = { ...newCart[index] };
      newItem.quantity += 1;

      newCart[index] = newItem;

      setCart(newCart);
    }
  };

  const decrement = (productId) => {
    const index = cart.findIndex((item) => item.productId === productId);

    if (index !== -1 && cart[index].quantity > 1) {
      const newCart = [...cart];

      const newItem = { ...newCart[index] };
      newItem.quantity -= 1;

      newCart[index] = newItem;

      setCart(newCart);
    }
  };

  return (
    <main>
      <header>
        <HeadingHeader></HeadingHeader>
        <NavBar cartLength={cart.length} />
      </header>

      <Outlet
        context={{
          products,
          categories,
          cart,
          addToCart,
          increment,
          decrement,
          deleteProduct,
        }}
      ></Outlet>

      <footer>
        <Footer></Footer>
      </footer>
      <BackToTop></BackToTop>
      <ToastContainer />
    </main>
  );
};

Layout.loader = async () => {
  try {
    const res = await fetch("https://jsonsv.herokuapp.com/products");
    const products = await res.json();

    const cateResponse = await fetch("https://jsonsv.herokuapp.com/categories");
    const categories = await cateResponse.json();

    return { products, categories };
  } catch (err) {
    throw new Error("Lỗi cmnr");
  }
};

export default Layout;
