import React from "react";

import { Outlet } from "react-router-dom";
import HeadingHeader from "../heading-header/HeadingHeader";
import NavBar from "../navbar/NavBar";

const Layout = () => {
  return (
    <div>
      <header>
        <HeadingHeader></HeadingHeader>
        <NavBar/>
      </header>

      <Outlet></Outlet>

      <footer>Footer</footer>
    </div>
  );
};

export default Layout;
