import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "aos/dist/aos.css";

// library
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AOS from "aos";
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
import Shop from "./pages/product/shop/Shop";

// aos
AOS.init({
  offset: 200,
  duration: 300,
  once: true,
});

const routes = createRoutesFromElements(
  <Route element={<Layout />}>
    <Route
      path="/"
      element={<Home />}
      // loader={Home.loader}
    />
    <Route
      path="/about"
      element={<About />}
      // loader={Home.loader}
    />
    <Route
      path="/contact"
      element={<Contact />}
      // loader={Home.loader}
    />
    <Route
      path="/product"
      element={<Product />}
      loader={Shop.loader}
      errorElement={<div>Something wrong :(</div>}
    />
    <Route
      path="/blog"
      element={<Blog />}
      // loader={Home.loader}
    />

    <Route
      path="/cart"
      element={<Cart />}
      // loader={Home.loader}
    />

    <Route
      path="/blog-detail"
      element={<BlogDetail />}
      // loader={Home.loader}
    />

    <Route
      path="/checkout"
      element={<Checkout />}
      // loader={Home.loader}
    />

    <Route
      path="/product-detail/:productId"
      element={<ProductDetail />}
      loader={ProductDetail.loader}
      errorElement={<div>Something wrong :(</div>}
    />

    <Route path="*" element={<div>Page Not Found</div>} />
  </Route>
);

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
