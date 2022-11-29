import React, { useRef, useState } from "react";
import "./Shop.css";
import ProductCard from "../../../components/product-card/ProductCard";
import { Pagination, Form } from "react-bootstrap";
import { useOutletContext } from "react-router-dom";
import MultiRangeSlider from "./MultiRangeSlider/MultiRangeSlider";
import ScrollToTop from "../../../components/srcoll/ScrollToTop";
import { useDispatch, useSelector } from "react-redux";
import { selectProductsList } from "../../../store/features/products/products.slice";

const Shop = () => {
  const {
    categories,
    products,
    currentPage,
    totalPage,
    pageChanged,
    filterChanged,
  } = useSelector(selectProductsList);
  const dispatch = useDispatch();
  const filterRef = useRef();

  // pagination
  const paginationItems = new Array(totalPage)
    .fill(null)
    .map((value, index) => (
      <Pagination.Item
        key={index}
        active={index === currentPage}
        onClick={() => dispatch(pageChanged(index))}
      >
        <ScrollToTop></ScrollToTop>
        {index + 1}
      </Pagination.Item>
    ));

  // search pr
  const search = (e) => {
    console.log(
      products.filter((pr) => {
        if (
          pr.name.toUpperCase().indexOf(e.target.value.toUpperCase().trim()) ==
          -1
        ) {
          return null;
        } else
          return (
            pr.name.toUpperCase().indexOf(e.target.value.toUpperCase().trim()) >
            -1
          );
      })
    );
  };

  // sort
  let productCopy = [...products];
  const sort = (e) => {
    if (e.target.value === "ascending") {
      return products.sort((a, b) => a.price - b.price);
    } else if (e.target.value == "descending") {
      return products.sort((a, b) => b.price - a.price);
    } else if (e.target.value == "nameascending") {
      return products.sort((a, b) =>
        a.name !== b.name ? (a.name < b.name ? -1 : 1) : 0
      );
    } else if (e.target.value == "namedescending") {
      return products.sort((a, b) =>
        a.name !== b.name ? (a.name > b.name ? -1 : 1) : 0
      );
    } else {
      return productCopy;
    }
  };

  return (
    <div className="container">
      <div className="row">
        {/* section list product */}
        <div className="col-12 col-lg-9 seaction-fruit d-flex flex-column justify-content-center align-items-center">
          <div className="sort d-flex flex-column justify-content-center align-items-center flex-md-row justify-content-md-between">
            <p className="fs-16 fw-400">Showing 1–9 of 24 results</p>
            <div className="sort-content fs-16 fw-400 position-relative">
              <i className="bi bi-caret-down-fill position-absolute" />
              <select
                className="sort-price"
                name="sort"
                onChange={(e) => sort(e)}
              >
                <option value="default">Sort product by</option>
                <option value="ascending">Price ascending</option>
                <option value="descending">Price descending</option>
                <option value="nameascending">Name ascending</option>
                <option value="namedescending">Name descending</option>
              </select>
            </div>
          </div>
          {/*  */}
          <div className="list-fruit">
            <div className="slider-fruit">
              {/* product */}
              <div className="list-fruit-product d-flex justify-content-center align-items-center gap-3 flex-wrap gap-xl-4 gap-xxl-5">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product}></ProductCard>
                ))}
              </div>

              {/* navigation */}
              <div className="pagination-list-product">
                <Pagination>{paginationItems}</Pagination>
              </div>
            </div>
          </div>
        </div>
        {/* section filter */}
        <div className="col-12 col-lg-3 section-filter d-flex flex-column align-items-center justify-content-between">
          <div className="filter-content d-flex justify-content-between align-items-center flex-column gap-3">
            {/* search */}
            <div className="pr-search position-relative d-none d-lg-block">
              <input
                className="search-box-pr"
                type="search"
                name="search-pr"
                id=""
                placeholder="Product search..."
                onKeyUp={(e) => search(e)}
              />
              <i className="icon bi bi-search position-absolute" />
              <ul className="text-to-search" />
            </div>
            {/* popular category */}
            <div className="popular-category d-flex">
              <form action="" className="title-category">
                <p className="fs-20 fw-400">Popular categories</p>
                {/* catrgory */}
                <div className="list-category">
                  <Form
                    onChange={() => {
                      const newFilter = [];
                      filterRef.current.elements.filter.forEach((checkbox) => {
                        if (checkbox.checked) newFilter.push(checkbox.value);
                      });

                      dispatch(filterChanged(newFilter));
                    }}
                    ref={filterRef}
                  >
                    {categories.map((cate) => (
                      <Form.Check
                        key={cate}
                        name="filter"
                        type="checkbox"
                        label={cate}
                        value={cate}
                      />
                    ))}
                  </Form>
                </div>
              </form>
            </div>
            {/* filter price */}
            <div className="spacer" />
            <div className="filter-price">
              <p className="fs-20 fw-400 filter-price-title text-center">
                Filter by price
              </p>
              <br />
              {/* slider range */}
              <MultiRangeSlider
                min={0}
                max={100}
                onChange={({ min, max }) => min + " - " + max}
                products={products}
              />
            </div>
            {/* popular product */}
            <div className="spacer" />
            <div className="popular-pr d-flex flex-column align-items-center gap-3">
              <p className="fs-20 fw-400">Popular products</p>
              {/*  */}
              <div className="list-product-popular d-flex flex-column align-content-center justify-content-center gap-5 flex-sm-row flex-wrap gap-sm-5">
                {/*  */}
                <div className="product-popular d-flex gap-3 justify-content-center align-content-center">
                  <div className="img-thumb-pr-popular">
                    <img src="../assets/img/pr-fr-1.png" alt="" />
                  </div>
                  <div className="title-pr-popular d-flex flex-column align-content-center justify-content-center">
                    <p className="fs-16 fw-400">Cherrys</p>
                    <p className="fs-16 text-green">$2.00</p>
                  </div>
                </div>
                {/*  */}
                <div className="product-popular d-flex gap-3 justify-content-center align-content-center">
                  <div className="img-thumb-pr-popular">
                    <img src="../assets/img/pr-fr-4.png" alt="" />
                  </div>
                  <div className="title-pr-popular d-flex flex-column align-content-center justify-content-center">
                    <p className="fs-16 fw-400">Orange</p>
                    <p className="fs-16 text-green">$2.00</p>
                  </div>
                </div>
                {/*  */}
                <div className="product-popular d-flex gap-3 justify-content-center align-content-center">
                  <div className="img-thumb-pr-popular">
                    <img src="../assets/img/pr-fr-3.png" alt="" />
                  </div>
                  <div className="title-pr-popular d-flex flex-column align-content-center justify-content-center">
                    <p className="fs-16 fw-400">Brocolis</p>
                    <p className="fs-16 text-green">$2.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
