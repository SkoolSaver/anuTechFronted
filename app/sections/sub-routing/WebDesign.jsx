import SkillCard from "../common/SkillCard";
import {
  webDesign,
  webDesign2,
  webDesignSkills,
} from "../components/helpers/content";
import Card from "../components/home-components/Card";
import LandingPage from "../components/home-components/LandingPage";
import Industries from "../components/home-components/Industries";
import GradientCard from "../common/GradientCard";

const heroSectionContent = {
  header: "Web design is meant for creating a prominent digital face",
  content:
    "Obtain the best website design service that successfully spread your corporate messages and promotes brand identity.",
  getQuote: false,
};

function WebDesign() {
  return (
    <>
      <LandingPage
        heroSectionContent={heroSectionContent}
        imgPath={"/web-design-hero.png"}
      />
      <Card
        hideReadMore={true}
        header={webDesign.header}
        content={webDesign.content}
        cardDetails={webDesign}
      />
      ;
      <SkillCard
        header={webDesignSkills.header}
        content={webDesignSkills.content}
        skills={webDesignSkills.skills}
      />
      <GradientCard
        header={webDesign2.header}
        content={webDesign2.content}
        cardDetails={webDesign2}
      />
      <Industries />
    </>
  );
}

export default WebDesign;
