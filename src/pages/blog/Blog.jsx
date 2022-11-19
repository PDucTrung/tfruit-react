import React from "react";
import PageFo from "../blog/page-fo/PageFo";
import BlogList from "./blog-list/BlogList";

const Blog = () => {
  return (
    <main>
      <div className="section-page-for font-poppins position-relative">
        <PageFo></PageFo>
      </div>

      {/* blog list */}
      <section className="section-list-blog font-poppins">
        <BlogList></BlogList>
      </section>
    </main>
  );
};

export default Blog;
