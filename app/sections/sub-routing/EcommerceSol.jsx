import GradientCard from '../common/GradientCard';
import SkillCard from '../common/SkillCard';
import { ecom, ecom2, eComSkills } from '../components/helpers/content';
import Card from '../components/home-components/Card';
import Industries from '../components/home-components/Industries';
import LandingPage from '../components/home-components/LandingPage';

const heroSectionContent = {
  header: 'Grow online Business unlimited with Advanced Ecommerce Application',
  content: 'Ecommerce solution could be designed and developed for your in Mobile App or Web App format with the latest frameworks.',
  getQuote: false,
};

function EcommerceSol() {
  return (
    <>
      <LandingPage heroSectionContent={heroSectionContent} imgPath={'/ecom-hero.png'} />;
      <Card hideReadMore={true} header={ecom.header} content={ecom.content} cardDetails={ecom} />;
      <SkillCard header={eComSkills.header} content={eComSkills.content} skills={eComSkills.skills} />
      <GradientCard header={ecom2.header} content={ecom2.content} cardDetails={ecom2} />
      <Industries />
    </>
  );
}

export default EcommerceSol;
