import React, { useState, useEffect } from "react";
import Navigation from "../navigation/Navigation";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import Modal from "react-bootstrap/Modal";

const NavBar = ({ cartLength }) => {
  const [showmenu, setShowmenu] = useState(false);

  // modal menu
  const handleCloseMenu = () => setShowmenu(false);
  const handleShowMenu = () => setShowmenu(true);

  // search
  const [ProductList, setProductList] = useState([]);
  useEffect(() => {
    async function getData() {
      const res = await fetch("https://jsonsv.herokuapp.com/products");
      const products = await res.json();
      setProductList(products);
    }
    getData();
  }, []);

  const search = (e) => {
    const productSearch = ProductList.filter((pr) => {
      if (
        pr.name.toUpperCase().indexOf(e.target.value.toUpperCase().trim()) == -1
      ) {
        return null;
      } else
        return (
          pr.name.toUpperCase().indexOf(e.target.value.toUpperCase().trim()) >
          -1
        );
    });

    console.log(productSearch);
  };

  return (
    <main>
      <div className="container">
        <div className="narbar d-flex align-items-center justify-content-between">
          <div className="rd-navbar-brand">
            <NavLink className="brand d-none d-xl-block" to="/">
              <img src="../assets/img/logo.png" alt="ss" />
            </NavLink>
            <div>
              <i
                id="menuBtn"
                className="icon bi bi-list d-xl-none hvr-grow-rotate"
                onClick={handleShowMenu}
              />
              {/* The Modal */}
              <Modal
                className="modal-menu d-xl-none"
                show={showmenu}
                onHide={handleCloseMenu}
              >
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                  <Navigation></Navigation>
                </Modal.Body>
              </Modal>
            </div>
          </div>
          <div className="d-none d-xl-block">
            <Navigation></Navigation>
          </div>
          <div className="list-item-right-navbar">
            <div className="d-flex justify-content-end align-items-center gap-3">
              <div className="search-box d-flex align-items-center justify-content-center position-relative">
                <input
                  type="text"
                  placeholder="Search product"
                  className="search-input"
                  onKeyUp={(e) => search(e)}
                />
                <div className="search-btn">
                  <i className="fas fa-search" id="searchBtn"></i>
                </div>
                <div className="content-search position-absolute">
                  {/* {ProductList.map((product) => (
                    <div>{product.name}</div>
                  ))} */}
                </div>
              </div>
              <div className="cart position-relative">
                <div className="number position-absolute">{cartLength}</div>
                <NavLink to={"/cart"}>
                  <i className="i bi bi-basket hvr-grow-rotate" />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NavBar;
