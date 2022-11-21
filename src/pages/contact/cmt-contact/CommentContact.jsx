import React from "react";
import "./CommentContact.css";
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";

const CommentContact = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm({
    criteriaMode: "all",
    mode: "onBlur",
  });
  const onSubmit = (e) => {
    console.log(e);
  };
  return (
    <div className="container">
      <div className="add-cmt">
        <div className="title-add-cmt fs-20 fw-400">
          <p className="fs-24 fw-500 text-uppercase">Contact Form</p>
        </div>
        <div className="content-add-cmt">
          <form className="form" id="form-6">
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
                  {...register("fullnamecontact", { required: true })}
                />
                {errors.fullnamecontact && (
                  <span className="form-message text-red">
                    This field is required
                  </span>
                )}
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
                  {...register("emailcontact", {
                    required: "Please enter this field!",
                    pattern: {
                      value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                      message: "This field must be email!",
                    },
                  })}
                />
                <ErrorMessage
                  errors={errors}
                  name="emailcontact"
                  render={({ messages }) => {
                    return messages
                      ? Object.entries(messages).map(([type, message]) => (
                          <span className="form-message text-red" key={type}>
                            {message}
                          </span>
                        ))
                      : null;
                  }}
                />
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
