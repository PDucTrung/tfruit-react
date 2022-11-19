import React from "react";
import "./CommentContact.css";

const CommentContact = () => {
  return (
    <div className="container">
      <div className="add-cmt">
        <div className="title-add-cmt fs-20 fw-400">
          <p className="fs-24 fw-500 text-uppercase">Contact Form</p>
        </div>
        <div className="content-add-cmt">
          <form action="" method="POST" className="form" id="form-5">
            <div className="name-customer d-flex gap-3">
              {/* full name */}
              <div className="form-group">
                <label
                  htmlFor="fullname"
                  className="form-label font-poppins text-uppercase"
                >
                  Full name
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
                <label htmlFor="email" className="form-label text-uppercase">
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
              <label htmlFor="cmt" className="form-label text-uppercase">
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
              <button className="btn-submit text-uppercase">
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CommentContact;
