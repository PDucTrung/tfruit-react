import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { toast } from "react-toastify";
import "./DetailProduct.css";

const DetailProduct = ({ product, randomImg }) => {
  const [Value, setValue] = useState(1);
  const [img, setImg] = useState(product.img);
  const changeImg = (e) => {
    setImg(e.target.src);
  };
  const { addToCart, Cart } = useOutletContext();
  const increment = () => {
    if (Value > 1) {
      setValue(+Value - 1);
    }
  };
  const decrement = () => {
    setValue(+Value + 1);
  };
  const handleAddToCartClick = () => {
    addToCart(product.id, Value);
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
    <div className="product-detail">
      <div className="container">
        {/*  */}
        <div className="pr-dt d-flex align-items-center flex-column flex-md-row justify-content-md-center align-items-md-start gap-5">
          <>
            <div className="img-pr-detail">
              <div className="d-flex flex-column gap-3 align-items-center justify-content-center">
                <div className="img-pr-top">
                  <img src={img} alt="dsd" />
                </div>
                <div className="img-pr-bottom d-flex gap-3 align-items-center justify-content-center">
                  <img
                    src={product.img}
                    alt="dsd"
                    onClick={(e) => changeImg(e)}
                  />
                  <img
                    src={"../assets/img/pr-fr-" + randomImg + ".png"}
                    alt="dsd"
                    onClick={(e) => changeImg(e)}
                  />
                  <img
                    src={"../assets/img/pr-fr-" + (randomImg - 1) + ".png"}
                    alt="dsd"
                    onClick={(e) => changeImg(e)}
                  />
                </div>
              </div>
            </div>
            <div className="content-pr-detail">
              <div className="tittle-pr-detail">
                <div>
                  <p className="font-mali fs-40 fw-500">{product.name}</p>
                </div>
                <div className="d-flex gap-3">
                  <div>
                    <span className="font-mali fs-20">{product.price}</span>
                  </div>
                  <div className="list-star d-flex justify-content-center align-items-center gap-2">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-half" />
                  </div>
                </div>
                <div>
                  <br />
                  <p>{product.description}</p>
                </div>
              </div>
              <div className="content-pr-detail">
                <div className="properties-pr-detail">
                  <div>
                    <p>
                      Brand: <span className="text-gray-fo">TFruit</span>
                    </p>
                  </div>
                  <div>
                    <p>
                      Category:{" "}
                      <span className="text-gray-fo">{product.category}</span>
                    </p>
                  </div>
                  <div>
                    <p>
                      Weght:{" "}
                      <span className="text-gray-fo">{product.weight}g</span>
                    </p>
                  </div>
                </div>
                <div className="quality-pr-detail d-flex align-items-center justify-content-between">
                  <div className="qty-cart">
                    <input
                      className="number-qty"
                      type="number"
                      id="input"
                      value={Value}
                      readOnly
                    />
                    <div className="num-in d-flex flex-column gap-2 align-items-center justify-content-center">
                      <button className="plus" onClick={decrement}>
                        <i className="fas fa-plus" />
                      </button>
                      <button className="minus" onClick={increment}>
                        <i className="fas fa-minus" />
                      </button>
                    </div>
                  </div>
                  <div className="add-cart-pr-detail">
                    <div
                      id="checkout"
                      className="btn-add button button-2"
                      onClick={handleAddToCartClick}
                    >
                      Add to cart
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
