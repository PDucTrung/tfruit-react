import React from "react";
import PageFo from "../product-detail/page-fo/PageFo";
import DetailProduct from "./detail-pr/DetailProduct";
import "./ProductDetail.css";
import TabsComment from "./tabs-cmt/TabsComment";
import ProductRelated from "./product-related/ProductRelated";
import { useOutletContext, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectProductById } from "../../store/features/products/products.slice";
const ProductDetail = () => {
  const randomImg = Math.floor(Math.random() * 8) + 2;
  const { productId } = useParams();
  const product = useSelector(selectProductById(productId));

  return (
    <main>
      <section className="section-page-for font-poppins position-relative">
        <PageFo product={product} />
      </section>

      {/* product detail  */}
      <section className="section-product-detail font-poppins">
        <DetailProduct product={product} randomImg={randomImg}></DetailProduct>
      </section>

      {/* tabs */}
      <section className="section-cmt-pr font-poppins">
        <TabsComment></TabsComment>
      </section>

      {/* related product */}
      <section className="section-related-product font-poppins">
        <ProductRelated product={product}></ProductRelated>
      </section>
    </main>
  );
};

export default ProductDetail;
