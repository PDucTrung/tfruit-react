import React, { useState, useEffect } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import BackToTop from "../back-to-top/BackToTop";
import Footer from "../footer/Footer";
import HeadingHeader from "../heading-header/HeadingHeader";
import NavBar from "../navbar/NavBar";
import Swal from "sweetalert2";
import LoadAnimation from "../load/LoadAnimation";
import { Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import ScrollToTop from "../srcoll/ScrollToTop";
import { useDispatch, useSelector } from "react-redux";

import { loadCategories } from "../../store/features/categories/categories.slice";
import {
  loadProduct,
  selectProductStatus,
} from "../../store/features/products/products.slice";

const Layout = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectProductStatus);

  useEffect(() => {
    dispatch(loadProduct({ productId: 1 }));
    dispatch(loadCategories());
  }, []);

  return (
    <Container fluid={true} className="p-0">
      <ScrollToTop></ScrollToTop>
      <header>
        <Navbar fixed="top" className="header d-flex flex-column">
          <HeadingHeader></HeadingHeader>
          <NavBar />
        </Navbar>
      </header>

      {loading ? <LoadAnimation></LoadAnimation> : <Outlet></Outlet>}

      <footer>
        <Footer></Footer>
      </footer>
      <BackToTop></BackToTop>
      <ToastContainer />
    </Container>
  );
};

// Layout.loader = async () => {
//   try {
//     const res = await fetch("https://jsonsv.herokuapp.com/products");
//     const products = await res.json();

//     const cateResponse = await fetch("https://jsonsv.herokuapp.com/categories");
//     const categories = await cateResponse.json();

//     return { products, categories };
//   } catch (err) {
//     throw new Error("Lỗi cmnr");
//   }
// };

export default Layout;
