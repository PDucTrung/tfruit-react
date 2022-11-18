import React from "react";
import SliderHome from "../../components/slider-home/SliderHome";
import "./Home.css";
import Offer from "./section-offer/Offer";
import Services from "./services/Services";

const Home = () => {
  return (
    <main>
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
    </main>
  );
};

export default Home;
