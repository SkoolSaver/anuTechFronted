import {
  Info,
  Speed,
  SupportAgent,
  People,
  Build,
  AccessTime,
  Star,
  Timeline,
  PhoneAndroid,
  Web,
  Public,
  ShoppingCart,
  Palette,
  ImportantDevices,
  Computer,
  Storefront,
  LocalHospital,
  School,
  HomeWork,
  Search,
  GroupWork,
  SearchOff,
  AttachMoney,
  Article,
  EmojiPeople,
  Favorite,
  AutoAwesome,
  PeopleAlt,
  CloudSync,
  Webhook,
  IntegrationInstructions,
  Api,
  MobileFriendly,
  Language,
  HourglassFull,
  Security,
  Assistant,
  WorkOutline,
  EmojiEvents,
  FlightTakeoff
} from "@mui/icons-material";

const aboutUs = {
  rightSide: {
    name: "About Us",
    header: "Uplift your business opportunity with us",
    content:
      "Skoolsaver was founded with a commitment to revolutionize student learning and skill development. We empower learners by providing unrivaled industry exposure, mentorship opportunities, and real‑time experiences through our Gradgains application, Skoolsaver Club, and Technology Summit. Our growing startup is dedicated to connecting students with leading businesses, fostering innovation, and delivering practical skill training. We continually launch new initiatives that enhance the learning journey, bridge academic and professional worlds, and inspire creativity. Our approach is simple, student‑centric, and results‑driven—ensuring every learner has the tools and opportunities to master new technologies and transform ideas into reality.",
  },
  leftSider: {
    lists: [
      {
        icon: <Info sx={{ color: "white" }} />,
        header: "What's our focus?",
        content:
          "Our Company’s focus on rendering next-generation IT and Emerging Automated IOT based Technologies along with Mobile App and digital Services that are precious for present & future generations.",
      },
      {
        icon: <Speed sx={{ color: "white" }} />,
        header: "Faster solution",
        content:
          "Our company’s motto is to find out a quick solution for all tough and challenging problems facing by clients with the help of incredible technologies without damaging the nature’s law.",
      },
      {
        icon: <SupportAgent sx={{ color: "white" }} />,
        header: "Excellent Customer Support",
        content:
          "We’re peopled by young, experienced, energetic, curious, and committed minds who are excited about solving critical issues related to business, Technological problems, ethically.",
      },
      {
        icon: <People sx={{ color: "white" }} />,
        header: "Team Spirit",
        content:
          "Our Company inspires people to think of creativity as well as think out of the box to endeavor the best solutions beneficial for humanity with latest AI, ML, IOT, and Mobile Apps.",
      },
    ],
  },
};

export const staticDataInAboutUsPage = {
  rightSide: {
    name: "About Us",
    header: "Who We Are",
    content: `
      We are team of young, globally experienced professionals with diverse industry expertise. We are committed to advancing educational excellence by integrating academic learning with practical, real-world applications. Through our innovative platforms Gradgains, Skoolsaver Club, and Technology Summit we create strategic bridges between academia and industry. Our mission is to provide unmatched industry exposure, mentorship, exclusive opportunities, and hands‑on experiences that empower students to master in-demand skills. By driving continuous innovation and fostering sustainable growth, we aim to redefine India’s educational landscape and equip future leaders with the tools necessary for global success.
    `,
  },
  leftSider: {
    lists: [
      {
        icon: <Build sx={{ color: "white" }} />,
        header: "Our Focus",
        content:
          "Our focus is on providing unparalleled industry exposure, expert mentorship, and hands-on experiences through innovative platforms—ensuring that every student develops the competencies to excel in today’s competitive world.",

      },
      {
        icon: <AccessTime sx={{ color: "white" }} />,
        header: "Our Solutions",
        content:
          "At Skoolsaver, our solutions empower learners through innovative technology, personalized mentorship, and strategic industry partnerships. We deliver practical tools that bridge academic theory with real‑world practice for transformative educational experiences.",
      },
      {
        icon: <Star sx={{ color: "white" }} />,
        header: "Our Goal",
        content:
          "Our goal is to create a dynamic learning ecosystem that equips students with practical skills and global insights, fostering an environment where academic excellence meets real‑world opportunities.",
      },
      {
        icon: <Timeline sx={{ color: "white" }} />,
        header: "Our Future Vision",
        content:
          "Our vision is to be the leading catalyst for educational transformation in India powered by a passionate team, innovative technology, and strategic partnerships that inspire lifelong learning and global success.",
      },
    ],
  },
};

const service = {
  rightSide: {
    name: "Our Services",
    header: "We provide the best!",
    content:
      "Our services offer the best-in-industry solutions to bridge the gap between students, universities, and the professional world. Through expert mentorship, real-world exposure, and skill development, we empower students for successful careers, help universities stay industry-aligned, and provide companies with access to job-ready talent and future innovators.",
  },
  leftSider: {
    lists: [
      {
        icon: <School sx={{ color: "white" }} />, // Icon for App Development
        header: "Technical Workshops and Training Programs",
        content:
          "Through Skoolsaver Club we offer hands-on training in emerging technologies, led by industry experts, enhancing technical skills and entrepreneurship, and preparing participants for real-world challenges through specialized boot camps.",
        },
      {
        icon: <WorkOutline sx={{ color: "white" }} />, // Icon for Web Development
        header: "Career Development Services",
        content:
          "We also provide career guidance, resume workshops, mock interviews, and job placements, helping students navigate their careers, with industry connections offering internships, mentorship, and valuable networking opportunities.",
        },
      {
        icon: <EmojiEvents sx={{ color: "white" }} />, // Icon for E-commerce Solution
        header: "Competitive Events and Hackathons",
        content:
          "Inter-college competitions, hackathons, and pitching events foster innovation, problem-solving, and real-world impact, supported by industry partners, enhancing students' skills and employability.",
        },
      {
        icon: <PeopleAlt sx={{ color: "white" }} />, // Icon for Graphic Design
        header: " Industry Access and Networking",
        content:
          "We offer direct access to industry experts, mentoring sessions, networking platforms, and industry visits, providing students with real-world exposure, connections, and valuable insights into their chosen fields.",
        },
      {
        icon: <Public sx={{ color: "white" }} />, // Icon for Web Design
        header: "Global Exposure and Connections",
        content:
          "International mentorship, cultural exchange programs, and exposure to global tech trends broaden students' perspectives, enhancing their skills, knowledge, and employability in a globalized world.",
        },
        {
          icon: <FlightTakeoff sx={{ color: "white" }} />, // Icon for Web Design
          header: " International Education and Career Exposure",
          content:
            "Sessions on international education, career fairs, and guidance on global certifications prepare students for international opportunities, enhancing their careers, and providing a competitive edge in the global job market.",
          },
    ],
  },
};
const digitalMarketing = {
  lists: [
    {
      icon: <Search sx={{ color: "white" }} />, // Icon for SEO
      header: "Search Engine Optimization (SEO)",
      content:
        "Our in-house digital marketing team will drive your website towards monetization with online visibility across the globe or targeted area on Google Search engine! Yielding revenue is fulfilled.",
    },
    {
      icon: <GroupWork sx={{ color: "white" }} />, // Icon for Social Media Marketing (SMM)
      header: "Social Media Marketing (SMM)",
      content:
        "The best SMM team establishes your business on Facebook, Instagram, Twitter, WhatsApp, and other sites effectively. WhatsApp Marketing is much popular presently because of user-friendliness!",
    },
    {
      icon: <SearchOff sx={{ color: "white" }} />, // Icon for Search Engine Marketing (SEM)
      header: "Search Engine Marketing (SEM)",
      content:
        "SEM experts commit to generate higher ROI from lower investment per single sale or client acquisition! Save money and Grow well at a faster rate within a focused timeline!",
    },
    {
      icon: <AttachMoney sx={{ color: "white" }} />, // Icon for Pay-Per-Click Advertising (PPC)
      header: "Pay-Per-Click Advertising (PPC)",
      content:
        "PPC experts help get the faster deals from potential visitors through Google Adwords within a short period! It’s the high-level paid or premium campaign conducted by certified professionals.",
    },
    {
      icon: <Article sx={{ color: "white" }} />, // Icon for Content Marketing
      header: "Content Marketing",
      content:
        "Content is a dependable component in the digital platforms including web pages, Articles, Blogs, and PR, etc. Unique and high-quality content is often recommended for a Landing page!",
    },
    {
      icon: <Storefront sx={{ color: "white" }} />, // Icon for Affiliate Marketing
      header: "Affiliate Marketing",
      content:
        "Get paid the commission on the sales volume with tricky affiliate marketing and the Amazon sellers and other online eCommerce sellers can take this opportunity to increase the sales volume!",
    },
  ],
};

const industries = {
  lists: [
    {
      icon: <Computer sx={{ color: "white" }} />, // Icon for Information Technologies (IT)
      header: "Information Technologies (IT)",
      content:
        "Leveraging technology to drive innovation, collaboration, and knowledge sharing, supporting IT startups and professionals globally. We facilitate networking opportunities, training programs, and access to cutting-edge technologies.",
      },
    {
      icon: <Public sx={{ color: "white" }} />, // Icon for Retail
      header: "Corporate Social Responsibilities",
      content:
        "Empowering businesses to drive positive social and environmental change, providing CSR solutions and guidance for sustainable impact. We help companies develop and implement effective CSR strategies.",
      },
    {
      icon: <LocalHospital sx={{ color: "white" }} />, // Icon for Healthcare
      header: "Mental Health & Wellness",
      content:
        "Promoting mental wellness, self-care, and emotional intelligence, offering resources and support for individuals and communities. We provide access to mental health professionals, workshops, and educational programs.",
      },
    {
      icon: <School sx={{ color: "white" }} />, // Icon for Education
      header: "Education",
      content:
        "Empowering students through industry exposure, skill development, and mentorship, enhancing employability and innovation in education. We support educational institutions in integrating industry-relevant skills and knowledge into their curricula.",
      },
    {
      icon: <FlightTakeoff sx={{ color: "white" }} />, // Icon for E-commerce
      header: " International Exposure",
      content:
        "Connecting individuals and businesses to global opportunities, facilitating international collaborations, knowledge sharing, and cultural exchange. We provide access to international networking events, cultural immersion programs, and global market research.",
      },
    {
      icon: <Storefront sx={{ color: "white" }} />, // Icon for Real estate
      header: " Entrepreneurship",
      content:
        "Fostering entrepreneurship, innovation, and job creation, providing mentorship, networking, and resources for startups and entrepreneurs. We support entrepreneurs in developing business plans, securing funding, and accessing markets.",
      },
  ],
};

const whyChoose = {
  lists: [
    {
      header: "1+",
      content: "Years of experience",
    },
    {
      header: "55+",
      content: "Dedicated Team",
    },
    {
      header: "25+",
      content: "Project done",
    },
    {
      header: "20+",
      content: "Trusted Client",
    },
  ],
};

export const fundamentalPrinciple = {
  lists: [
    {
      header: "Innovation",
      content:
        "We foster a culture of continuous innovation, equipping students with cutting-edge skills and solutions to thrive in a rapidly evolving industry.",
      icon: <Star sx={{ color: "white", fontSize: 30 }} />,
    },
    {
      header: "Collaboration",
      content:
        "We bridge the gap between students, universities, and industry by creating strong partnerships, mentorship networks, and real-world opportunities.",
      icon: <EmojiPeople sx={{ color: "white", fontSize: 30 }} />,
    },
    {
      header: "Growth",
      content:
        "We empower students to grow into industry-ready professionals through hands-on training, entrepreneurship support, and career development.",
      icon: <Speed sx={{ color: "white", fontSize: 30 }} />,
    },
    {
      header: "Impact",
      content:
        "We are committed to creating a lasting impact by transforming education, fostering employability, and driving meaningful change in society.",
      icon: <Public sx={{ color: "white", fontSize: 30 }} />,
    },
  ],
};

// ---------------------------------Service Section ------------------------------------------------

const webDesign = {
  header: "Our Awesome Professional Web Design Service",
  content:
    "Partner with us to get the exciting quality-oriented awesome web design service. Your all desires could be fulfilled certainly here with latest trends.",
  lists: [
    {
      icon: <AutoAwesome sx={{ color: "white" }} />, // Icon for Information Technologies (IT)
      header: "HTML Website",
      content:
        "We design the latest HTML based through dream weaver and other code editors by incorporating the latest frameworks and HTML-based programming coding. Responsive design using a framework is possible here. Static sites are much cheaper in comparison to dynamic websites.",
    },
    {
      icon: <CloudSync sx={{ color: "white" }} />, // Icon for Retail
      header: "PSD to HTML",
      content:
        "We implement HTML codes by incorporating PSD files for a satisfactory look at the website that’s desired by you. Your hard work for the Photoshop design task would be greatly used to obtain the best output. Our experienced HTML designers can fulfill the need certainly.",
    },
    {
      icon: <Webhook sx={{ color: "white" }} />, // Icon for Healthcare
      header: "PSD To WordPress",
      content:
        "You’ll get converted your PSD files of existing to fully functioning advanced WordPress theme-based sites at a glance. No need to worry about the ranking of PSD file-based websites, since it would be converted to a WordPress website to get ranked on Google well.",
    },
    {
      icon: <IntegrationInstructions sx={{ color: "white" }} />, // Icon for E-commerce
      header: "PSD To Shopify",
      content:
        "Looking for conversion of PSD templates to Shopify sites with stores? Here, your requirement could be easily fulfilled with the assistance of our Shopify experts who have great knowledge of both the PSD files and Shopify sites. Why don’t you take trial for one page?",
    },
    {
      icon: <Api sx={{ color: "white" }} />, // Icon for Real estate
      header: "PSD To Magento",
      content:
        "You’ll get an extremely beautiful Magento theme-based web design service from the PSD files of the existing website. No single gap will remain behind during this conversion of PSD to Magento design procedure. Wanna a single page or multiple pages?",
    },
    {
      icon: <HomeWork sx={{ color: "white" }} />, // Icon for Real estate
      header: "UI Design",
      content:
        "User Interface design is nothing but user-friendly design for easier navigation and well understandable web design service. User is the king and his/her all requirements need to be implemented for better output and satisfaction.",
    },
  ],
};

const webDesign2 = {
  header: "Skoll Saver : The right choice for your Advanced Web Design need",
  content:
    "We never hesitate to work with small-scale companies or startups even though we have a number of MNCs and corporate companies across the globe.",
  lists: [
    {
      icon: <MobileFriendly sx={{ color: "white" }} />, // Icon for Information Technologies (IT)
      header: "Mobile Friendly",
      content:
        "Get developed complete responsive or mobile-friendly web application that can bring your more SmartPhone users as your customers and your website could be populated on the web within few moments. Smartphone users are growing up rapidly across the globe.",
    },
    {
      icon: <Language sx={{ color: "white" }} />, // Icon for Retail
      header: "Well Designed Web App",
      content:
        "Our expert designers are well trained and experienced to develop a well-designed web app that’ll be highly appreciated by you. Nothing is tame taking task unless you are not being satisfied from the point of view of the web application.",
    },
    {
      icon: <HourglassFull sx={{ color: "white" }} />, // Icon for Healthcare
      header: "Full Stack Development",
      content:
        "We have hired more Full-stack developers than other categories of developers because of the need of clients and various industrial sectors. Fulfilling the need of various customers with the use of diversified technology could be fulfilled for sure.",
    },
    {
      icon: <Security sx={{ color: "white" }} />, // Icon for E-commerce
      header: "Advanced Security & Scalability",
      content:
        "Since the company’s data is vital for the management and owners, we incorporate all the advanced security certificates and software to improve security and scalability. Security implementation is mandatory for a safeguard purpose.",
    },
    {
      icon: <Assistant sx={{ color: "white" }} />, // Icon for Real estate
      header: "Easy Communication",
      content:
        "Our development team works like your in-house team and communicates with your management and technical persons instantly for any information-sharing purpose. By phone, or Net connection, or any video chatting, communication could be organized.",
    },
    {
      icon: <Speed sx={{ color: "white" }} />, // Icon for Real estate
      header: "High Performance & Speed",
      content:
        "We believe the light-weighted and modern websites perform at a higher speed and get browsed by huge users across the globe at a glance, which is mostly desired by the website owners. Performance of the website is mandatory for faster data storing in the database.",
    },
  ],
};

const products = {
  header: "Our Products",
  content:
    "Explore our diverse range of innovative solutions designed to meet your business needs:",
  lists: [
    {
      icon: <Language sx={{ color: "white" }} />, // Icon for Well Designed Web App
      header: "Skoolsaver Club",
      content:
        "Skool Saver Club is an exclusive initiative designed to establish a vibrant presence in educational institutions. It offers students unparalleled industry exposure, mentorship programs, networking opportunities, and international experiences. By bridging academia with the professional world, the club fosters innovation, professional growth, and community engagement—ensuring students are well‑equipped to succeed in today’s competitive environment with excellence.",
      },
    {
      
      icon: <MobileFriendly md={{ color: "white" }} />, // Icon for Web Development Solutions
      header: "GradGains",
      content:
      "Gradgains is an innovative platform connecting students with nearby businesses and startups. It provides exclusive discounts, internship opportunities, part-time or full‑time work opportunities, and expert mentor matching services. This one‑stop solution empowers students to enhance their career prospects, develop professional networks, and acquire essential industry skills—bridging the gap between academia and industry efficiently.",

       
        img: "logo.png"
    },
    {
      icon: <HourglassFull sx={{ color: "white" }} />, // Icon for Full Stack Development
      header: "Shiva Reddy Charitable Trust",
      content:
        "Shiva Reedy Charitable Trust is a founder’s initiative dedicated to uplifting underprivileged communities. Focused on educating underprivileged girl children and preserving the environment, the Trust delivers impactful educational programs, community outreach, and sustainable development projects. By nurturing talent and empowering future generations, this initiative transforms lives, drives social change, and fosters environmental stewardship for lasting progress.",
      },
    {
      icon: <Security sx={{ color: "white" }} />, // Icon for Advanced Security & Scalability
      header: "Technical Summit",
      content:
        "Technology Summit is a premier global event uniting innovators, entrepreneurs, and student talent in one dynamic forum. It features ideathons, pitching competitions, networking sessions, and collaborative workshops that foster the spirit of technology, entrepreneurship, and innovation. The summit provides an unparalleled platform for exchanging ideas, forming strategic partnerships, and catalyzing transformative change across global industries.",
      },
    // {
    //   icon: <Assistant sx={{ color: "white" }} />, // Icon for Easy Communication
    //   header: "Easy Communication",
    //   content:
    //     "Our development team acts like an extension of your in-house staff, providing instant communication through phone, internet, or video conferencing to ensure seamless collaboration.",
    // },Fostering student growth through industry exposure, skill development, and mentorship. We partner with e
    // {
    //   icon: <Speed sx={{ color: "white" }} />, // Icon for High Performance & Speed
    //   header: "High Performance & Speed",
    //   content:
    //     "We prioritize lightweight, modern websites that perform at high speeds, ensuring fast data processing and browsing experiences for users around the globe, enhancing overall website performance.",
    // },
  ],
};
const webDesignSkills = {
  header: "Latest AI, IoT, and Machine Learning based Web Development",
  content:
    "All kinds of technologies including AI, IoT, and Machine Learning could be easily included to get developed a multi-purpose web application.",
  skills: ["Html.png", "Css.png", "Javascript.png", "Redux.png"],
};

const webDev = {
  header: "Our Awesome Professional Web Design Service",
  content:
    "Partner with us to get the exciting quality-oriented awesome web design service. Your all desires could be fulfilled certainly here with latest trends.",
  lists: [
    {
      icon: <AutoAwesome sx={{ color: "white" }} />, // Icon for Information Technologies (IT)
      header: "Custom Web App Development",
      content:
        "Customized web development could help the customers to get fulfilled their needs with appropriate requirements i.e., B2B and B2C daily business transactions. Get an error-free web development from experienced web developers.",
    },
    {
      icon: <CloudSync sx={{ color: "white" }} />, // Icon for Retail
      header: "Progressive Web Development",
      content:
        "Experience the Big-data and other latest technology for a better progressive web development purpose. You’ll get everything that you need to have some new type of application and database integration. Taste the latest Smart and Automation technologies.",
    },
    {
      icon: <Webhook sx={{ color: "white" }} />, // Icon for Healthcare
      header: "Full Stack Development",
      content:
        "We have hired more Full-stack developers than other categories of developers because of the need of clients and various industrial sectors. Fulfilling the need of various customers with the use of diversified technology could be fulfilled for sure.",
    },
    {
      icon: <IntegrationInstructions sx={{ color: "white" }} />, // Icon for E-commerce
      header: "Third Party Integration",
      content:
        "Integrating other web applications into your existing web application is not a big deal. Our skilled and longtime experienced web developers will fulfill it certainly. The required knowledge to integrate third-party applications is excellent here.",
    },
    {
      icon: <Api sx={{ color: "white" }} />, // Icon for Real estate
      header: "API Development Services",
      content:
        "With some popular technology-based API (Application Programming Interface) like Magento, WordPress, and other CMSs, get developed the latest web Application. Consult with us to get matured web applications with the use of any selected CMS.",
    },
    {
      icon: <HomeWork sx={{ color: "white" }} />, // Icon for Real estate
      header: "WordPress Development",
      content:
        "Since WordPress is simple yet crucial for the development of various web applications that are mandatory for a valid flawless, and multi-functional web app, that is either AI or ML or IoT based platform. Database integration experience is great in the case of WordPress development.",
    },
  ],
};

const webDev2 = {
  header: "Skool Saver : the Perfect option for Front-end Web App Development",
  content:
    "We never hesitate to work with small-scale companies or startups even though we have a number of MNCs and corporate companies across the globe.",
  lists: [
    {
      icon: <MobileFriendly sx={{ color: "white" }} />, // Icon for Information Technologies (IT)
      header: "Mobile Friendly",
      content:
        "Get developed complete responsive or mobile-friendly web application that can bring your more SmartPhone users as your customers and your website could be populated on the web within few moments. Smartphone users are growing up rapidly across the globe.",
    },
    {
      icon: <Language sx={{ color: "white" }} />, // Icon for Retail
      header: "Well Designed Web App",
      content:
        "Our expert designers are well trained and experienced to develop a well-designed web app that’ll be highly appreciated by you. Nothing is tame taking task unless you are not being satisfied from the point of view of the web application.",
    },
    {
      icon: <HourglassFull sx={{ color: "white" }} />, // Icon for Healthcare
      header: "Full Stack Development",
      content:
        "We have hired more Full-stack developers than other categories of developers because of the need of clients and various industrial sectors. Fulfilling the need of various customers with the use of diversified technology could be fulfilled for sure.",
    },
    {
      icon: <Security sx={{ color: "white" }} />, // Icon for E-commerce
      header: "Advanced Security & Scalability",
      content:
        "Since the company’s data is vital for the management and owners, we incorporate all the advanced security certificates and software to improve security and scalability. Security implementation is mandatory for a safeguard purpose.",
    },
    {
      icon: <Assistant sx={{ color: "white" }} />, // Icon for Real estate
      header: "Easy Communication",
      content:
        "Our development team works like your in-house team and communicates with your management and technical persons instantly for any information-sharing purpose. By phone, or Net connection, or any video chatting, communication could be organized.",
    },
    {
      icon: <Speed sx={{ color: "white" }} />, // Icon for Real estate
      header: "High Performance & Speed",
      content:
        "We believe the light-weighted and modern websites perform at a higher speed and get browsed by huge users across the globe at a glance, which is mostly desired by the website owners. Performance of the website is mandatory for faster data storing in the database.",
    },
  ],
};

const webDevSkills = {
  header: "Latest AI, IoT, and Machine Learning based Web Development",
  content:
    "All kinds of technologies including AI, IoT, and Machine Learning could be easily included to get developed a multi-purpose web application.",
  skills: [
    "Html.png",
    "Css.png",
    "Redux.png",
    "Php.png",
    "Vue.png",
    "Angular.png",
    "Javascript.png",
  ],
};

const appDev = {
  header: "Our Innovative Mobile Apps development services",
  content:
    "Often we focus to incorporate create new styles and new customized themes for our clients to improve Mobile App Experience with BOTH the Native and Hybrid platforms.",
  lists: [
    {
      icon: <AutoAwesome sx={{ color: "white" }} />, // Icon for Information Technologies (IT)
      header: "Android App Development",
      content:
        "The best use of Java can be realized here with all kinds of programming effort and the best output could be obtained. Ranking on Google is much easier!",
    },
    {
      icon: <CloudSync sx={{ color: "white" }} />, // Icon for Retail
      header: "IOS App Development",
      content:
        "Transform your thought into a successful mobile app within your reasonable budget and appropriate UI/UX design. Global benchmark quality is assured!",
    },
    {
      icon: <Webhook sx={{ color: "white" }} />, // Icon for Healthcare
      header: "Hybrid App Development",
      content:
        "Hybrid App is nothing but customized app development without the use of an SDK tool kit and you can mix different codes and designs over here to run in any mobile!",
    },
    {
      icon: <IntegrationInstructions sx={{ color: "white" }} />, // Icon for E-commerce
      header: "App Integration",
      content:
        "If you have already existing mobile apps and you wish to renovate them or to add some extra pages to them, we have all infrastructures to develop and update your existing app.",
    },
    {
      icon: <Api sx={{ color: "white" }} />, // Icon for Real estate
      header: "Native App Development",
      content:
        "Native Apps include Android and iOS or iPhone apps that are completely dependent upon SDK toolkits for a unique mobile app with automation feature as per your requirement.",
    },
    {
      icon: <HomeWork sx={{ color: "white" }} />, // Icon for Real estate
      header: "Flutter App Development",
      content:
        "Our experienced engineers develop flutter apps using Google’s UI toolkit for awesome natively compiled apps for web, mobile, and desktop only from a single codebase.",
    },
  ],
};

const appDevSkills = {
  header: "Latest AI, IoT, and Machine Learning based Web Development",
  content:
    "All kinds of technologies including AI, IoT, and Machine Learning could be easily included to get developed a multi-purpose web application.",
  skills: ["Java.png", "Flutter.png", "React.png", "IOT.png"],
};

const appDev2 = {
  header: "Skool Saver : the Perfect option for Mobile App Development",
  content:
    "We never hesitate to work with small-scale companies or startups even though we have a number of MNCs and corporate companies across the globe.",
  lists: [
    {
      icon: <AutoAwesome sx={{ color: "white" }} />, // Icon for Information Technologies (IT)
      header: "Cross-platform Development",
      content:
        "Developing cross-platform mobile apps is easy with our tools and technologies. You can create apps for Android, iOS, and even Windows!",
    },
    {
      icon: <CloudSync sx={{ color: "white" }} />, // Icon for Retail
      header: "Customized UI/UX Design",
      content:
        "We create customized UI/UX designs for your mobile apps to meet your specific needs and to improve user experience. Our designers are highly skilled and experienced.",
    },
    {
      icon: <Webhook sx={{ color: "white" }} />, // Icon for Healthcare
      header: "AI and Machine Learning Integration",
      content:
        "We integrate AI and Machine Learning algorithms to improve your mobile apps and to make them more sophisticated and user-friendly.",
    },
    {
      icon: <IntegrationInstructions sx={{ color: "white" }} />, // Icon for E-commerce
      header: "App Integration",
      content:
        "If you have already existing mobile apps and you wish to renovate them or to add some extra pages to them, we have all infrastructures to develop and update your existing app.",
    },
    {
      icon: <Api sx={{ color: "white" }} />, // Icon for Real estate
      header: "Native App Development",
      content:
        "Native Apps include Android and iOS or iPhone apps that are completely dependent upon SDK toolkits for a unique mobile app with automation feature as per your requirement.",
    },
    {
      icon: <HomeWork sx={{ color: "white" }} />, // Icon for Real estate
      header: "Flutter App Development",
      content:
        "Our experienced engineers develop flutter apps using Google’s UI toolkit for awesome natively compiled apps for web, mobile, and desktop only from a single codebase.",
    },
  ],
};

const ecom = {
  header: "Our User-friendly eCommerce Development Services",
  content:
    "Get developed the simplified yet dynamic and user-friendly that is Google SEO qualified! From the 1st month, it definitely will become a money-generating machine for you.",
  lists: [
    {
      icon: <AutoAwesome sx={{ color: "white" }} />, // Icon for Information Technologies (IT)
      header: "Custom Online Store",
      content:
        "Your online store would be completely customized with advanced well-designed logos and banners of products which ultimately increases sales conversions.",
    },
    {
      icon: <CloudSync sx={{ color: "white" }} />,
      header: "Multi Vendor Platform",
      content:
        "Your online store would be completely customized with advanced well-designed logos and banners",
    },
    {
      icon: <CloudSync sx={{ color: "white" }} />,
      header: "WordPress - Woocommerce",
      content:
        "If you need us to develop advanced Woocommerce shopping sites using WordPress themes definitely that will be implemented. You’ll have something new experience with respect to user-friendliness!",
    },
    {
      icon: <CloudSync sx={{ color: "white" }} />,
      header: "Custom Magento",
      content:
        "We develop custom Magento 2 extensions for your business that will help you to build a robust and user-friendly online store.",
    },
    {
      icon: <CloudSync sx={{ color: "white" }} />,
      header: "Shopify Store",
      content:
        "Shopify eCommerce store handles everything starting from purchase, stock maintain, sales, and payment collection; you’ll have the experienced engineers here to develop your shopping sites with perfection.",
    },
    {
      icon: <CloudSync sx={{ color: "white" }} />,
      header: "OpenCart",
      content:
        "Open Cart is said to be a Native app solution that converts eCommerce sites into Android and iOS mobile Apps! Place an inquiry to know, how! You’ll have multiple opportunities to fulfill your dual requirement!",
    },
  ],
};

const eComSkills = {
  header: "Our multiplatform Technologies",
  content:
    "We have no limitation with respect to incorporation technologies for eCommerce site development. IoT and AI incorporation with eCommerce applications is truly a great challenge.",
  skills: [
    "Java.png",
    "drupal.png",
    "woo.png",
    "go.png",
    "shopify.png",
    "django.png",
  ],
};

const ecom2 = {
  header: "Skool Saver : The place of eCommerce experts",
  content:
    "We have hired the best-experienced eCommerce developers who ought to fulfill all requirements by your modern eCommerce site requirement with user-friendly features.",
  lists: [
    {
      icon: <AutoAwesome sx={{ color: "white" }} />, // Icon for Information Technologies (IT)
      header: "Mobile Friendly",
      content:
        "We have a broad range of responsive development frameworks that are used to get developed both desktop and mobile-friendly eCommerce sites for a better user experience! Let’s know your need!",
    },
    {
      header: "Well Designed eCommerce Site",
      content:
        "What you think or imagine, we’ll just get that accomplished certainly with well-designed eCommerce sites in a customized approach and rarely viewed designs. Let’s know what exactly you’re thinking!",
    },
    {
      header: "Complete SEO Friendly",
      content:
        "Your website will be complete SEO-friendly from the point of view of Google algorithms along with text and keywords percentage. Also, a complete light-weighted responsive website will be designed for sure.",
    },
    {
      header: "Full Transparency",
      content:
        "Since the navigation structure will be easily understandable for the end-users, it’ll be completely transparent and users never fail to find any essential content! Hence, always satisfaction can be expected!",
    },
    {
      header: "On-Time Work",
      content:
        "With an estimated time frame, the work will be delivered on-time due to the involvement of experienced eCommerce application developers! Without experience, it’s quite possible to finish work on-time.",
    },
    {
      header: "Dedicated Team",
      content:
        "Our dedicated team will work with you as your in-house team and your all expectation will be certainly implemented with the inclusion of all necessary technical factors and web application tools for eCommerce projects.",
    },
  ],
};

const digital = {
  header: "Digital Marketing Services",
  content:
    "We are here to help you create your brand as a digital marketer. We have a team of experts who will help you to create a unique and effective digital marketing campaign.",
  lists: [
    {
      icon: <AutoAwesome sx={{ color: "white" }} />, // Icon for Information Technologies (IT)
      header: "Social Media Marketing (SMM)",
      content:
        "The best SMM team establishes your business on FaceBook, Instagram, Twitter, Whats App, and other sites effectively. WhatsApp Marketing is much popular presently because of user-friendliness!",
    },
    {
      icon: <CloudSync sx={{ color: "white" }} />,
      header: "Search Engine Optimization (SEO)",
      content:
        "Our in-house digital marketing team will drive your website towards monetization with online visibility across the globe or targeted area on Google Search engine! Yielding revenue is fulfilled.",
    },
    {
      icon: <CloudSync sx={{ color: "white" }} />,
      header: "Search Engine Marketing (SEM)",
      content:
        "SEM experts commit to generate higher ROI from lower investment per single sale or client acquisition! Save money and Grow well at a faster rate within a focusedtimeline!",
    },
    {
      icon: <CloudSync sx={{ color: "white" }} />,
      header: "Pay-Per-Click Advertising (PPC)",
      content:
        "PPC experts help get the faster deals from potential visitors through Google Adwords within a short period! It’s the high-level paid or premium campaign conducted by certified professionals.",
    },
    {
      icon: <CloudSync sx={{ color: "white" }} />,
      header: "Content Marketing",
      content:
        "Content is a dependable component in the digital platforms including web pages, Articles, Blogs, and PR, etc. Unique and high-quality content is often recommended for a Landing page!",
    },
    {
      icon: <CloudSync sx={{ color: "white" }} />,
      header: "Affiliate Marketing",
      content:
        "Get paid the commission on the sales volume with tricky affiliate marketing and the Amazon sellers and other online eCommerce sellers can take this opportunity to increase the sales volume!",
    },
  ],
};

const digitalSkills = {
  header: "Our Technologies",
  content:
    "Our Company’s focus on rendering next-generation IT and Emerging Automated IOT based Technologies along with Mobile App and digital Services that are precious for present & future generations.",
  skills: [
    "Html.png",
    "Css.png",
    "Javascript.png",
    "React.png",
    "IOT.png",
    "Redux.png",
  ],
};

const digital2 = {
  header: "Skool Saver : The right choice for your Organic SEO, PPC, and SMO",
  content:
    "We incorporate all kinds of latest algorithms recommended by Google towards the Organic SEO, PPC, and Social Media promotions such as Number of Back-links and Keywords ratio with content.",

  lists: [
    {
      icon: <CloudSync sx={{ color: "white" }} />,
      header: "Organic SEO",
      content:
        "Organic SEO is nothing but free SEO activities which is not chargeable by Google at all for clicking by the visitors and often the ranking could stay longer on the top page of Google. This SEO includes Backlinks, article submission and Blog posting, and guest posting activities.",
    },
    {
      icon: <CloudSync sx={{ color: "white" }} />,
      header: "PPC with keyword research",
      content:
        "PPC stands for Pay Per Click which includes the premium terms and conditions of Google. All clicks that are made by the visitors will be chargeable, but the result is better and faster than the Organic SEO. Highly competitive and low competitive keywords will be properly implemented to get a quicker result.",
    },
    {
      icon: <CloudSync sx={{ color: "white" }} />,
      header: "Local SEO with Analytics",
      content:
        "Local SEO is meant for location-wise Keyword-based SEO activities such as DVD suppliers in California, Digital marketing companies in the USA, and more. Analytics report will show the Local SEO report and you can make some plans for area-wise promotion.",
    },
    {
      icon: <CloudSync sx={{ color: "white" }} />,
      header: "Social Media Promotion",
      content:
        "Social Media sites are the popular platform for acquiring more pushups for your sites and many multimedia activities can be performed to promote your products, services, and websites across the globe. The collection of viewers is much easier here.",
    },
    {
      icon: <CloudSync sx={{ color: "white" }} />,
      header: "Consistent Bing/Yahoo ranking",
      content:
        "Apart from, we work on push up the ranking of your web pages on Bing/ Yahoo for a better number of audiences and the non-Google users can view your sites from here to fulfill their requirement. Your business possibility will be doubled.",
    },
    {
      icon: <CloudSync sx={{ color: "white" }} />,
      header: "High-quality Articles/Blog posts",
      content:
        "Our Articles and Blog posts are written by our content experts for a better Organic SEO and manual submission purpose. If article content is interactive and unique, it could create an impulse in the mind of the readers. The conversion rate will be more.",
    },
  ],
};
export {
  aboutUs,
  service,
  digitalMarketing,
  industries,
  whyChoose,
  webDev,
  webDevSkills,
  webDev2,
  webDesign,
  webDesign2,
  webDesignSkills,
  appDev,
  appDevSkills,
  appDev2,
  ecom,
  eComSkills,
  ecom2,
  digital,
  digitalSkills,
  digital2,
  products,
};
