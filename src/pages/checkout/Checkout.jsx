import React from "react";
import PageFo from "../checkout/page-fo/PageFo";
import Billing from "./billing/Billing";
import Pay from "./pay/Pay";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import { selectCart } from "../../store/features/cart/cart.slice";

const Checkout = () => {
  const { items, totalPrice } = useSelector(selectCart);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    criteriaMode: "all",
    mode: "onBlur",
  });
  const onSubmit = (e) => {
    console.log(e);
    Swal.fire("Payment success!", "", "success");
  };
  return (
    <main>
      <section className="section-page-for font-poppins position-relative">
        <PageFo />
      </section>

      {/* adress billing */}
      <section className="section-address font-poppins">
        <Billing
          totalPrice={totalPrice}
          shoppingCart={items}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          register={register}
          errors={errors}
        ></Billing>
      </section>

      {/* pay */}
      <section className="section-pay font-poppins">
        <Pay
          totalPrice={totalPrice}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
        ></Pay>
      </section>
    </main>
  );
};

export default Checkout;
