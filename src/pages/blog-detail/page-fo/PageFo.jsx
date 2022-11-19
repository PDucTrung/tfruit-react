import React from "react";

const PageFo = () => {
  return (
    <main>
      <div className="page-fo">
        <div className="img-fill">
          <img src="./assets/img/page-fo.jpg" alt="" />
        </div>
      </div>
      <div className="title-page-fo text-center text-white position-absolute">
        <h1 className="font-mali">Blog</h1>
        <p class="fz-24 fw-400">
          Home
          <span className="text-orange-fo">
            /
            <a className="text-decoration-none text-orange-fo" href="blog.html">
              Blog
            </a>
            / All About Pudding
          </span>
        </p>
      </div>
    </main>
  );
};

export default PageFo;
