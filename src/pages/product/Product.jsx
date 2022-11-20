import React from "react";
import PageFo from "../product/page-fo/PageFo";
import Shop from "./shop/Shop";

const Product = () => {
  return (
    <main>
      <section className="section-page-for font-poppins position-relative">
        <PageFo />
      </section>

      <>
        {/* section list product */}
        <section className="section-shop font-poppins">
          <div className="spacer" />
          <Shop></Shop>
        </section>
      </>
    </main>
  );
};

export default Product;
