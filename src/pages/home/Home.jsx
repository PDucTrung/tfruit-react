import React from "react";
import SliderHome from "../../components/slider-home/SliderHome";
import "./Home.css";
import Offer from "./section-offer/Offer";

const Home = () => {
  return (
    <main>
      <section className="section-slider-home">
        <SliderHome />
      </section>
      <section className="section-offer font-poppins">
        <Offer></Offer>
      </section>
    </main>
  );
};

export default Home;
