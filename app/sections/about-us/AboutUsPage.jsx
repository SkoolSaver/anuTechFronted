import React from "react";
import AboutUs from "../components/home-components/AboutUs";
import {
  fundamentalPrinciple,
  staticDataInAboutUsPage,
  whyChoose,
} from "../components/helpers/content";
import DedicatedCardChoose from "../components/home-components/DedicatedCardChoose";
import MainTitle from "../common/MainTitle";
import UserCardList from "./OurTeamList";
import OurTeamList from "./OurTeamList";

const AboutUsPage = () => {
  return (
    <div style={{ paddingTop: "100px" }}>
      <MainTitle title="About Us" />
      <AboutUs
        isReverse={true}
        data={staticDataInAboutUsPage}
        gradientColor={"rgb(16,159, 234)"}
      />
      <OurTeamList />
      <DedicatedCardChoose
        title="Fundamental Principle"
        data={fundamentalPrinciple}
      />
      <DedicatedCardChoose title=" Why Choose Us" data={whyChoose} />
    </div>
  );
};

export default AboutUsPage;
