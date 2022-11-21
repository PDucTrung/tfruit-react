import React, { useState } from "react";
import "./TabsComment";

const TabsComment = () => {
  return (
    <div className="cmt-pr position-relative">
      {/* tabs */}
      <div className="wrapper3">
        <div className="tabs">
          <div className="tab">
            <input
              type="radio"
              name="css-tabs"
              id="tab-1"
              defaultChecked={true}
              className="tab-switch"
            />
            <label htmlFor="tab-1" className="tab-label fw-500">
              Reviews(1)
            </label>
            <div className="tab-content">
              {/* user */}
              <div className="user-cmt d-flex gap-3">
                <div className="img-user">
                  <img src="../assets/img/user-cmt-1.jpg" alt="dsd" />
                </div>
                <div className="content-user-cmt d-flex flex-column gap-2">
                  <div className="user-cmt-title d-flex justify-content-between align-items-center">
                    <div className="user-title d-flex gap-3 justify-content-center align-content-center">
                      <div className="name-user fw-400">John Doe</div>
                      <div className="list-star d-flex justify-content-center align-items-center gap-2">
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-half" />
                      </div>
                    </div>
                    <div className="time-cmt font-mali text-gray-fo">
                      NOV 30, 2018
                    </div>
                  </div>
                  <div className="content-cmt fs-14">
                    The product you delivered me has surpassed all my
                    expectations. The item is one of the best, all-purpose items
                    ever crafted. I love everything about my purchase. Reliable,
                    secure, quirky, easy to clean in and out.
                  </div>
                </div>
              </div>
              <div className="spacer" />
              {/* add your cmt */}
              <div className="add-cmt">
                <div className="title-add-cmt fs-20 fw-400">
                  <p>Add your comment</p>
                </div>
                <div className="content-add-cmt">
                  <form
                    action=""
                    method="POST"
                    className="form"
                    id="form-5"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <div className="name-customer d-flex gap-3">
                      {/* full name */}
                      <div className="form-group">
                        <label
                          htmlFor="fullname"
                          className="form-label font-poppins"
                        >
                          Name
                        </label>
                        <input
                          id="fullname"
                          name="fullname"
                          type="text"
                          placeholder="Ex: Pham"
                          className="form-control"
                        />
                        <span className="form-message" />
                      </div>
                      {/* Email */}
                      <div className="form-group">
                        <label htmlFor="email" className="form-label">
                          Email
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="text"
                          placeholder="Ex: email@domain.com"
                          className="form-control"
                        />
                        <span className="form-message" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="cmt" className="form-label">
                        Comment
                      </label>
                      <textarea
                        name="cmt"
                        id=""
                        cols={30}
                        rows={10}
                        placeholder="Your comment ..."
                        defaultValue={""}
                      />
                      <span className="form-message" />
                    </div>
                    <div>
                      <button className="btn-submit">SUBMIT</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="tab">
            <input
              type="radio"
              name="css-tabs"
              id="tab-2"
              className="tab-switch"
            />
            <label htmlFor="tab-2" className="tab-label fw-500">
              Describe
            </label>
            <div className="tab-content">
              It flesh is 73% water, 15% fat, 9% carbohydrates, and 2% protein
              (table). In a 100 gram reference amount, avocado supplies 160
              calories, and is a rich source (20% or more of the Daily Value,
              DV) of several B vitamins (such as 28% DV in pantothenic acid) and
              vitamin K (20% DV), with moderate contents (10-19% DV) of vitamin
              C, vitamin E, and potassium. Avocados also contain phytosterols
              and carotenoids, such as lutein and zeaxanthin.
            </div>
          </div>
          <div className="tab">
            <input
              type="radio"
              name="css-tabs"
              id="tab-3"
              className="tab-switch"
            />
            <label htmlFor="tab-3" className="tab-label fw-500">
              Nutriton
            </label>
            <div className="tab-content">
              <div className="nutriton d-flex justify-content-center align-items-center flex-wrap gap-5">
                <div className="d-flex gap-2 justify-content-start align-items-center flex-wrap">
                  <p>
                    <strong>Fat</strong>
                  </p>
                  <p>
                    .............................................................................
                  </p>
                  <p>15g</p>
                </div>
                <div className="d-flex gap-2 justify-content-start align-items-center flex-wrap">
                  <p>
                    <strong>Sodium</strong>
                  </p>
                  <p>
                    .............................................................................
                  </p>
                  <p>7mg</p>
                </div>
                <div className="d-flex gap-2 justify-content-start align-items-center flex-wrap">
                  <p>
                    <strong>Potassium</strong>
                  </p>
                  <p>
                    .............................................................................
                  </p>
                  <p>480g</p>
                </div>
                <div className="d-flex gap-2 justify-content-start align-items-center flex-wrap">
                  <p>
                    <strong>Protein</strong>
                  </p>
                  <p>
                    .............................................................................
                  </p>
                  <p>3g</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabsComment;
