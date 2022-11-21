import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import BackToTop from "../back-to-top/BackToTop";
import Footer from "../footer/Footer";
import HeadingHeader from "../heading-header/HeadingHeader";
import NavBar from "../navbar/NavBar";

const Layout = () => {
  const { products, categories } = useLoaderData();
  return (
    <main>
      <header>
        <HeadingHeader></HeadingHeader>
        <NavBar />
      </header>

      <Outlet
        context={{
          products,
          categories,
        }}
      ></Outlet>

      <footer>
        <Footer></Footer>
      </footer>
      <BackToTop></BackToTop>
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
