import GradientCard from '../common/GradientCard';
import SkillCard from '../common/SkillCard';
import { webDev, webDev2, webDevSkills } from '../components/helpers/content';
import Card from '../components/home-components/Card';
import Industries from '../components/home-components/Industries';
import LandingPage from '../components/home-components/LandingPage';

const heroSectionContent = {
  header: 'Web Development of digital products could be affordable.',
  content:
    'Getting a mobile-friendly Website through the top class web developers is definitely possible here within your reasonable budget.',
  getQuote: false,
};
function WebDevelopment() {
  return (
    <>
      <LandingPage heroSectionContent={heroSectionContent} imgPath={'/web-dev-hero.png'} />
      <Card hideReadMore={true} header={webDev.header} content={webDev.content} cardDetails={webDev} />;
      <SkillCard header={webDevSkills.header} content={webDevSkills.content} skills={webDevSkills.skills} />
      <GradientCard header={webDev2.header} content={webDev2.content} cardDetails={webDev2} />
      <Industries />
    </>
  );
}

export default WebDevelopment;
