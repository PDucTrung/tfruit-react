import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { addItem } from "../../store/features/cart/cart.slice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const handleAddToCartClick = () => {
    dispatch(addItem({ productId: product.id, quantity: 1 }));
    toast.success("Add to cart successfully", {
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
    <div className="fruit-product d-flex flex-column justify-content-center align-items-center gap-3 position-relative">
      <NavLink to={`/product-detail/${product.id}`}>
        <div className="img-thumb-pr">
          <img src={product.img} alt="sds" />
        </div>
      </NavLink>
      <div className="name-pr-fr">
        <NavLink
          to={`/product-detail/${product.id}`}
          className="fs-20 fw-400 text-decoration-none text-black"
        >
          {product.name}
        </NavLink>
      </div>
      <div className="price-pr-fr">
        <span className="fs-16 fw-400 text-green">$ {product.price}</span>
      </div>
      <div className="add-cart position-absolute">
        <div
          id="checkout"
          className="btn-add button button-2"
          onClick={handleAddToCartClick}
        >
          Add to cart
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
