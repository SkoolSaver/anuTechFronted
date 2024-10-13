import { Box } from '@mui/material';
import AboutUs from '../components/home-components/AboutUs';
import Service from '../components/home-components/Service';
import DigitaMarket from '../components/home-components/DigitalMarket';
import Industries from '../components/home-components/Industries';
import LandingPage from '../components/home-components/LandingPage';
import ContactUs from '../components/home-components/ContactUs';
import { aboutUs, whyChoose } from '../components/helpers/content';
import DedicatedCardChoose from '../components/home-components/DedicatedCardChoose';
import GradientCard from '../common/GradientCard';

const heroSectionContent = {
  header: 'Seamless delivery of IT, Web and mobile App Project',
  content: 'We leverage the Web and mobile App opportunity to create a solid end-user experience to urge your brand’s augmentation.',
  readMore: true,
};

const HomePage = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <LandingPage heroSectionContent={heroSectionContent} imgPath={'/home-hero.png'} />
      <DedicatedCardChoose title=' Why Choose Us' data={whyChoose} />
      <AboutUs isReverse={true} data={aboutUs} gradientColor={'rgb(16,159, 234)'} />
      <Service />
      <DigitaMarket />
      <Industries />
      <ContactUs />
    </Box>
  );
};

export default HomePage;
