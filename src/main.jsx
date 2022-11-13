import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Product from "./pages/product/Product";
import Blog from "./pages/blog/Blog";
import Layout from "./components/layout/Layout";
import Cart from "./pages/cart/Cart";

const routes = createRoutesFromElements(
  <Route element={<Layout />}>
    <Route
      path="/"
      element={<Home />}
      // loader={Home.loader}
      errorElement={<div>Có gì đó không ổn :(</div>}
    />
    <Route
      path="/about"
      element={<About />}
      // loader={Home.loader}
      errorElement={<div>Có gì đó không ổn :(</div>}
    />
    <Route
      path="/contact"
      element={<Contact />}
      // loader={Home.loader}
      errorElement={<div>Có gì đó không ổn :(</div>}
    />
    <Route
      path="/product"
      element={<Product />}
      // loader={Home.loader}
      errorElement={<div>Có gì đó không ổn :(</div>}
    />
    <Route
      path="/blog"
      element={<Blog />}
      // loader={Home.loader}
      errorElement={<div>Có gì đó không ổn :(</div>}
    />

    <Route
      path="/cart"
      element={<Cart />}
      // loader={Home.loader}
      errorElement={<div>Có gì đó không ổn :(</div>}
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
