import React from "react";
import PageFo from "../checkout/page-fo/PageFo";
import Billing from "./billing/Billing";
import Pay from "./pay/Pay";
import { useOutletContext } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Checkout = () => {
  const { products, cart } = useOutletContext();
  const shoppingCart = cart.map((item) => ({
    ...item,
    product: products.find((product) => product.id === item.productId),
  }));
  const totalPrice = shoppingCart.reduce(
    (total, item) => (total += item.product.price * item.quantity),
    0
  );
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
    toast.success("Order Success", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
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
          shoppingCart={shoppingCart}
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
