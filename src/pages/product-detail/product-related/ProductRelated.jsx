import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Autoplay, Navigation } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";
import ProductCard from "../../../components/product-card/ProductCard";

const ProductRelated = ({ product }) => {
  const [ProductList, setProductList] = useState([]);
  useEffect(() => {
    async function getData() {
      const res = await fetch("https://jsonsv.herokuapp.com/products");
      const products = await res.json();
      setProductList(products);
    }
    getData();
  }, []);

  const productRelated = ProductList.filter(
    (products) => products.category === product.category
  );

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
          {productRelated.map((product) => (
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
