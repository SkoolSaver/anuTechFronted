import React from "react";
import AboutUs from "../components/home-components/AboutUs";
import {
  fundamentalPrinciple,
  staticDataInAboutUsPage,
  whyChoose,
} from "../components/helpers/content";
import DedicatedCardChoose from "../components/home-components/DedicatedCardChoose";
import MainTitle from "../common/MainTitle";
import OurTeamList from "./OurTeamList";

const AboutUsPage = () => {
  return (
    <div className="about-us-page">
      <MainTitle title="About Us" />
      <AboutUs
        isReverse={true}
        data={staticDataInAboutUsPage}
        gradientColor={"rgb(16,159, 234)"}
      />
      {/* Render the team list */}
      <OurTeamList />
      <DedicatedCardChoose
        title="Fundamental Principle"
        data={fundamentalPrinciple}
      />
      <DedicatedCardChoose title="Why Choose Us" data={whyChoose} />
    </div>
  );
};

export default AboutUsPage;
