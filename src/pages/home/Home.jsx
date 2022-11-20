import React from "react";
import { Container } from "react-bootstrap";
import SliderHome from "./slider-home/SliderHome";
import AboutHome from "./about-home/AboutHome";
import CommentHome from "./cmt-Home/CommentHome";
import "./Home.css";
import ListFruit from "./list-pr/ListFruit";
import ListVegetable from "./list-pr/ListVegetable";
import Parallax from "./parallax/Parallax";
import Patner from "./patner/Patner";
import Sale from "./sale/Sale";
import Offer from "./section-offer/Offer";
import Services from "./services/Services";

const Home = () => {
  return (
    <main>
      {/* slider home */}
      <section className="section-slider-home">
        <SliderHome />
      </section>

      {/* offer */}
      <section className="section-offer font-poppins">
        <Offer />
      </section>

      {/* service */}
      <section className="section-service font-popins">
        <Services />
      </section>

      {/* list vegetable */}
      <section className="product-list font-poppins">
        <ListVegetable></ListVegetable>
      </section>

      {/* sale */}
      <section className="section-sale font-poppins">
        <Sale></Sale>
      </section>

      {/* list fruit */}
      <section className="product-list font-poppins">
        <ListFruit></ListFruit>
      </section>

      {/* parallax */}
      <section className="section-para font-poppins">
        <Parallax></Parallax>
      </section>

      {/* about home */}
      <section className="section-abouthome font-poppins">
        <AboutHome></AboutHome>
      </section>

      {/* cmt home */}
      <section className="section-cmthome">
        <CommentHome></CommentHome>
      </section>

      {/* patner */}
      <section className="section-partners">
        <Patner></Patner>
      </section>
    </main>
  );
};

export default Home;
