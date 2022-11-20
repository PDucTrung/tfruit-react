import React from "react";
import PageFo from "../product-detail/page-fo/PageFo";
import DetailProduct from "./detail-pr/DetailProduct";
import "./ProductDetail.css";
import { useLoaderData } from "react-router-dom";
import TabsComment from "./tabs-cmt/TabsComment";
import ProductRelated from "./product-related/ProductRelated";

const ProductDetail = () => {
  const product = useLoaderData();
  return (
    <main>
      <section className="section-page-for font-poppins position-relative">
        <PageFo product={product} />
      </section>

      {/* product detail  */}
      <section className="section-product-detail font-poppins">
        <DetailProduct product={product}></DetailProduct>
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

ProductDetail.loader = async ({ params }) => {
  const { productId } = params;

  try {
    const res = await fetch(
      "https://jsonsv.herokuapp.com/products/" + productId
    );
    const product = res.json();

    return product;
  } catch (err) {
    throw new Error("Không load được dữ liệu sản phẩm");
  }
};

export default ProductDetail;
