import React from "react";
import PageFo from "../cart/page-fo/PageFo";
import CartProduct from "./cart-pr/CartProduct";

const Cart = () => {
  return (
    <main>
      <section className="section-page-for font-poppins position-relative">
        <PageFo />
      </section>

      {/* cart */}
      <section className="section-cart font-poppins">
        <CartProduct></CartProduct>
      </section>
    </main>
  );
};

export default Cart;
