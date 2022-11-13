import React from 'react';
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const menu = [
  {
    path: "/",
    label: "HOME",
  },
  {
    path: "/product",
    label: "SHOP",
  },
  {
    path: "/about",
    label: "ABOUT",
  },
  {
    path: "/blog",
    label: "BLOG",
  },
  {
    path: "/contact",
    label: "CONTACT",
  },
];

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      {menu.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          children={item.label}
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        />
      ))}
    </nav>
  );
};

export default Navigation