import React, { useState } from "react";

const DetailProduct = ({ product }) => {
  const [Value, setValue] = useState(1);
  const increment = () => {
    if (Value > 1) {
      setValue(+Value - 1);
    }
  };
  const decrement = () => {
    setValue(+Value + 1);
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
                  <img src={product.img} alt="dsd" />
                </div>
                <div className="img-pr-bottom d-flex gap-3 align-items-center justify-content-center">
                  <img src={product.img} alt="dsd" />
                  <img src="../assets/img/pr-detail-2.png" alt="dsd" />
                  <img src="../assets/img/pr-detail-3.png" alt="dsd" />
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
                    <div id="checkout" className="btn-add button button-2">
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
