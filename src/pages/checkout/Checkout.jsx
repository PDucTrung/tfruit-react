import React from "react";
import PageFo from "../checkout/page-fo/PageFo";
import Billing from "./billing/Billing";
import Pay from "./pay/Pay";

const Checkout = () => {
  return (
    <main>
      <section className="section-page-for font-poppins position-relative">
        <PageFo />
      </section>

      {/* adress billing */}
      <section className="section-address font-poppins">
        <Billing></Billing>
      </section>

      {/* pay */}
      <section className="section-pay font-poppins">
        <Pay></Pay>
      </section>
    </main>
  );
};

export default Checkout;
