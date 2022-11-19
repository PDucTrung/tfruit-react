import React from "react";
import PageFo from "../contact/page-fo/PageFo";
import CommentContact from "./cmt-contact/CommentContact";
import GoogleMap from "./gg-map/GoogleMap";
import Infomation from "./infomation/Infomation";

const Contact = () => {
  return (
    <main>
      <section className="section-page-for font-poppins position-relative">
        <PageFo />
      </section>

      <>
        {/* information */}
        <section className="section-contact-infor font-poppins fw-500 text-green">
          <Infomation></Infomation>
        </section>
        {/* cmt contact */}
        <section className="seaction-cmt-contact font-poppins">
          <CommentContact></CommentContact>
        </section>
        {/* gg map */}
        <section className="section-map">
          <GoogleMap></GoogleMap>
        </section>
      </>
    </main>
  );
};

export default Contact;
