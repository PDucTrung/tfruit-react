import React from "react";
import PageFo from "../blog-detail/page-fo/PageFo";
import BlogPost from "./blog-post/BlogPost";

const BlogDetail = () => {
  return (
    <main>
      <div className="section-page-for font-poppins position-relative">
        <PageFo></PageFo>
      </div>

      {/* blog post */}
      <section className="section-blog-detail font-poppins">
        <BlogPost></BlogPost>
      </section>
    </main>
  );
};

export default BlogDetail;
