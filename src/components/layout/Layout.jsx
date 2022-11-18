import React from "react";

import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import HeadingHeader from "../heading-header/HeadingHeader";
import NavBar from "../navbar/NavBar";

const Layout = () => {
  return (
    <div>
      <header>
        <HeadingHeader></HeadingHeader>
        <NavBar />
      </header>

      <Outlet></Outlet>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Layout;
