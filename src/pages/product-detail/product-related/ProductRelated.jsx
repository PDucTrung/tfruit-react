import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useOutletContext } from "react-router-dom";
import { Autoplay, Navigation } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";
import ProductCard from "../../../components/product-card/ProductCard";
import { selectAllProducts } from "../../../store/features/products/products.slice";

const ProductRelated = ({ product }) => {
  const products = useSelector(selectAllProducts);

  return (
    <div className="container">
      <div className="fs-24 fw-500 text-center">
        <p>Related Products</p>
      </div>
      <div className="spacer" />
      <div className="related-product-slider">
        <Swiper
          className="slider-related"
          loop={true}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          centerInsufficientSlides={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Autoplay, Navigation]}
          breakpoints={{
            576: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            992: {
              slidesPerView: 4,
            },
          }}
        >
          {products
            .filter((products) => products.category === product.category)
            .map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard product={product}></ProductCard>
              </SwiperSlide>
            ))}
          <div className="swiper-button-next" />
          <div className="swiper-button-prev" />
        </Swiper>
      </div>
    </div>
  );
};

export default ProductRelated;
