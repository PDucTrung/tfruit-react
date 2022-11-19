import React from "react";

import { Outlet } from "react-router-dom";
import BackToTop from "../back-to-top/BackToTop";
import Footer from "../footer/Footer";
import HeadingHeader from "../heading-header/HeadingHeader";
import NavBar from "../navbar/NavBar";

const Layout = () => {
  return (
    <main>
      <header>
        <HeadingHeader></HeadingHeader>
        <NavBar />
      </header>

      <Outlet></Outlet>

      <footer>
        <Footer></Footer>
      </footer>
      <BackToTop></BackToTop>
    </main>
  );
};

export default Layout;
