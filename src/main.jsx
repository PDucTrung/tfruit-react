import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Routes,
} from "react-router-dom";

// library
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "hover.css/css/hover.css";

// router
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Product from "./pages/product/Product";
import Blog from "./pages/blog/Blog";
import BlogDetail from "./pages/blog-detail/BlogDetail";
import Layout from "./components/layout/Layout";
import Cart from "./pages/cart/Cart";
import Checkout from "./pages/checkout/Checkout";
import ProductDetail from "./pages/product-detail/ProductDetail";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import store from "./store";

const routes = createRoutesFromElements(
  <Route element={<Layout />} errorElement={<div>Some thing wrong :(</div>}>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route
      path="/product"
      element={<Product />}
      errorElement={<div>Something wrong :(</div>}
    />
    <Route path="/blog" element={<Blog />} />

    <Route path="/cart" element={<Cart />} />

    <Route path="/blog-detail" element={<BlogDetail />} />

    <Route path="/checkout" element={<Checkout />} />

    <Route
      path="/product-detail/:productId"
      element={<ProductDetail />}
      errorElement={<div>Something wrong :(</div>}
    />

    <Route path="*" element={<div>Page Not Found</div>} />
  </Route>
);

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>
);
