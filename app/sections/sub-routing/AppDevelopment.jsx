import GradientCard from '../common/GradientCard';
import SkillCard from '../common/SkillCard';
import { appDev, appDev2, appDevSkills } from '../components/helpers/content';
import Card from '../components/home-components/Card';
import Industries from '../components/home-components/Industries';
import LandingPage from '../components/home-components/LandingPage';

const heroSectionContent = {
  header: 'Obtain the best Mobile apps at affordable price',
  content:
    'Increase your end-user experience and B2C and B2B business promotion strategy with an error-free and advanced NATIVE or CROSS-PLATFORM mobile app.',
  getQuote: false,
};

function AppDevelopment() {
  return (
    <>
      <LandingPage heroSectionContent={heroSectionContent} imgPath={'/app-dev-hero.png'} />
      <Card hideReadMore={true} header={appDev.header} content={appDev.content} cardDetails={appDev} />;
      <SkillCard header={appDevSkills.header} content={appDevSkills.content} skills={appDevSkills.skills} />
      <GradientCard header={appDev2.header} content={appDev2.content} cardDetails={appDev2} />
      <Industries />
    </>
  );
}

export default AppDevelopment;
