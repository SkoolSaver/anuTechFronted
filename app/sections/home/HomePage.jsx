import { Box } from "@mui/material";
import AboutUs from "../components/home-components/AboutUs";
import Service from "../components/home-components/Service";
import DigitalMarket from "../components/home-components/DigitalMarket";
import Industries from "../components/home-components/Industries";
import LandingPage from "../components/home-components/LandingPage";
import ContactUs from "../components/home-components/ContactUs";
import { aboutUs, whyChoose } from "../components/helpers/content";
import DedicatedCardChoose from "../components/home-components/DedicatedCardChoose";
import GradientCard from "../common/GradientCard";

// Hero section content for LandingPage
const heroSectionContent = {
  header: 'Bridging gaps and building futures',
  content: 'Skoolsaver empowers students by bridging the gap between education and the real world. We provide practical skills, real-time experience, and access to industry experts, technology, and mentors to help students build successful careers in business, tech, and beyond.'
};
//hello

const HomePage = () => {
  return (
    <Box mt="30px" sx={{ width: '100%' }}>
      {/* Landing page section */}
      <LandingPage heroSectionContent={heroSectionContent} imgPath="/home-hero.png" />

      {/* Uncomment these if you want to display them later */}
      {/* 
        <DedicatedCardChoose title="Why Choose Us" data={whyChoose} />
        <AboutUs isReverse={true} data={aboutUs} gradientColor="rgb(16,159, 234)" />
        <DigitalMarket />
      */}

      {/* Service, Industries, and Contact Us sections */}
      <Service />
      <Industries />
      <ContactUs />
    </Box>
  );
};

export default HomePage;
