import GradientCard from '../common/GradientCard';
import SkillCard from '../common/SkillCard';
import { digital, digital2, digitalSkills } from '../components/helpers/content';
import Card from '../components/home-components/Card';
import Industries from '../components/home-components/Industries';
import LandingPage from '../components/home-components/LandingPage';

const heroSectionContent = {
  header: 'Faster Result with Digital marketing is not a big thing!',
  content: 'Our improved digital marketing strategy drives your online promotion faster than you have ever experienced anywhere else.',
  getQuote: false,
};

function DigitalMarket() {
  return (
    <>
      <LandingPage heroSectionContent={heroSectionContent} imgPath={'/digital-hero.png'} />
      <Card hideReadMore={true} header={digital.header} content={digital.content} cardDetails={digital} />;
      <SkillCard header={digitalSkills.header} content={digitalSkills.content} skills={digitalSkills.skills} />
      <GradientCard header={digital2.header} content={digital2.content} cardDetails={digital2} />
      <Industries />
    </>
  );
}

export default DigitalMarket;
