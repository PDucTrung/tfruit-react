import React from "react";
import History from "./history/History";
import PageFo from "./page-fo/PageFo";
import TabsAbout from "./tabs-about/TabsAbout";
import Team from "./team/Team";

const About = () => {
  return (
    <main>
      <section className="section-page-for font-poppins position-relative">
        <PageFo />
      </section>

      {/* tabs about */}
      <section className="section-tabs font-poppins">
        <TabsAbout></TabsAbout>
      </section>

      {/* out history */}
      <section className="section-history font-poppins">
        <History></History>
      </section>

      {/* team */}
      <section className="section-our-team font-poppins font-poppins">
        <Team></Team>
      </section>
    </main>
  );
};

export default About;
