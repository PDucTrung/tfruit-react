import React, { useState, useEffect } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import BackToTop from "../back-to-top/BackToTop";
import Footer from "../footer/Footer";
import HeadingHeader from "../heading-header/HeadingHeader";
import NavBar from "../navbar/NavBar";
import Swal from "sweetalert2";
import { Container } from "react-bootstrap";

const Layout = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

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
    Swal.fire({
      title: "Do you want to delete ?",
      showDenyButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("OK!", "", "success");
        const newCart = cart.filter((pr) => pr.productId !== productId);
        setCart(newCart);
      }
    });
    // if (confirm("Are you sure you want to delete this product?")) {
    //   const newCart = cart.filter((pr) => pr.productId !== productId);
    //   setCart(newCart);
    // }
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
      {loading ? (
        <Container
          fluid={true}
          className="p-0 loading-container d-flex align-items-center justify-content-center"
        >
          <main>
            <svg class="sp" viewBox="0 0 128 128" width="128px" height="128px">
              <defs>
                <linearGradient id="grad1" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="#000" />
                  <stop offset="40%" stop-color="#fff" />
                  <stop offset="100%" stop-color="#fff" />
                </linearGradient>
                <linearGradient id="grad2" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="#000" />
                  <stop offset="60%" stop-color="#000" />
                  <stop offset="100%" stop-color="#fff" />
                </linearGradient>
                <mask id="mask1">
                  <rect
                    x="0"
                    y="0"
                    width="128"
                    height="128"
                    fill="url(#grad1)"
                  />
                </mask>
                <mask id="mask2">
                  <rect
                    x="0"
                    y="0"
                    width="128"
                    height="128"
                    fill="url(#grad2)"
                  />
                </mask>
              </defs>
              <g fill="none" stroke-linecap="round" stroke-width="16">
                <circle class="sp__ring" r="56" cx="64" cy="64" stroke="#ddd" />
                <g stroke="hsl(223,90%,50%)">
                  <path
                    class="sp__worm1"
                    d="M120,64c0,30.928-25.072,56-56,56S8,94.928,8,64"
                    stroke="hsl(343,90%,50%)"
                    stroke-dasharray="43.98 307.87"
                  />
                  <g transform="translate(42,42)">
                    <g class="sp__worm2" transform="translate(-42,0)">
                      <path
                        class="sp__worm2-1"
                        d="M8,22c0-7.732,6.268-14,14-14s14,6.268,14,14"
                        stroke-dasharray="43.98 175.92"
                      />
                    </g>
                  </g>
                </g>
                <g stroke="hsl(283,90%,50%)" mask="url(#mask1)">
                  <path
                    class="sp__worm1"
                    d="M120,64c0,30.928-25.072,56-56,56S8,94.928,8,64"
                    stroke-dasharray="43.98 307.87"
                  />
                  <g transform="translate(42,42)">
                    <g class="sp__worm2" transform="translate(-42,0)">
                      <path
                        class="sp__worm2-1"
                        d="M8,22c0-7.732,6.268-14,14-14s14,6.268,14,14"
                        stroke-dasharray="43.98 175.92"
                      />
                    </g>
                  </g>
                </g>
                <g stroke="hsl(343,90%,50%)" mask="url(#mask2)">
                  <path
                    class="sp__worm1"
                    d="M120,64c0,30.928-25.072,56-56,56S8,94.928,8,64"
                    stroke-dasharray="43.98 307.87"
                  />
                  <g transform="translate(42,42)">
                    <g class="sp__worm2" transform="translate(-42,0)">
                      <path
                        class="sp__worm2-1"
                        d="M8,22c0-7.732,6.268-14,14-14s14,6.268,14,14"
                        stroke-dasharray="43.98 175.92"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </main>
        </Container>
      ) : (
        <div className="main">
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
        </div>
      )}
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
