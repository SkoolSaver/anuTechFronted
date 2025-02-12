import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { popins } from "@/app/google-fonts/fonts";

const AccleratorProgram = () => {
  return (
    <Container maxWidth="lg"  mt="40px" sx={{ py: 5, 
      marginTop: "10px", // Add top margin
      paddingTop: '80px'
    }}>
      {/* Page Title */}
      <Typography
        variant="h2"
        fontSize={40}
        fontWeight={700}
        textAlign="center"
        className={popins.className}
        sx={{ mb: 6, color: "white", textTransform: "uppercase" }}
      >
        
      </Typography>

      {/* Introduction */}
      <Typography
        variant="body1"
        sx={{ mb: 8, textAlign: "center", color: "gray", fontSize: 20 }}
      >
        At Skoolsaver, we are committed to transforming how students prepare for their future careers. Our platform is designed to equip students with the skills, opportunities, and connections they need to thrive in the competitive global landscape. <br /> We empower students to enhance their skills and be better part of themselves.
      </Typography>

      {/* Program Details with Hover Effects */}
      <Box>
        {/* Mentorship & Guidance Section */}
        <Box
          sx={{
            mb: 6,
            transition: "transform 0.3s, color 0.3s",
            "&:hover": {
              transform: "scale(1.05)",
              color: "#67c3f3",
            },
          }}
        >
          <Typography
            variant="h4"
            fontWeight={600}
            sx={{ color: "white", fontSize: 28 }}
          >
            1. Exposure to Real-World Skills
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "gray", mt: 2, fontSize: 18, lineHeight: 1.8 }}
          >
            At Skoolsaver, we empower students to gain hands-on experience by connecting them with startups, businesses, and talented peers through real-world opportunities. Students collaborate on live projects with startups, gaining exposure to the entrepreneurial ecosystem and solving real challenges. Through industry-driven capstone projects, designed in partnership with businesses and professionals, they apply their knowledge to tackle practical problems while enhancing critical skills.
            <br />
            <br />
            
          </Typography>
        </Box>

        {/* Funding Opportunities Section */}
        <Box
          sx={{
            mb: 6,
            transition: "transform 0.3s, color 0.3s",
            "&:hover": {
              transform: "scale(1.05)",
              color: "#67c3f3",
            },
          }}
        >
          <Typography
            variant="h4"
            fontWeight={600}
            sx={{ color: "white", fontSize: 28 }}
          >
            2. Connecting with Industry Professionals
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "gray", mt: 2, fontSize: 18, lineHeight: 1.8 }}
          >
           At Skoolsaver, we connect students with industry professionals and mentors, ensuring they gain firsthand insights into the professional world. This connection allows students to learn directly from experienced leaders across various fields, helping them understand industry expectations, emerging trends, and best practices.
           By working closely with these professionals, students gain insights into problem-solving, decision-making, and innovation in real-world scenarios. This direct exposure not only bridges the gap between students and industry but also helps them build a valuable network of mentors and contacts who can open doors to internships, job opportunities, and entrepreneurial guidance. At Skoolsaver, we ensure every student has access to the right people, insights, and opportunities to excel in their chosen career paths.
            <br />
            <br />
            <em>
              "Success is best achieved with guidance—our mentors help you
              chart the path to success."
            </em>
          </Typography>
        </Box>

        {/* Networking Opportunities Section */}
        <Box
          sx={{
            mb: 6,
            transition: "transform 0.3s, color 0.3s",
            "&:hover": {
              transform: "scale(1.05)",
              color: "#67c3f3",
            },
          }}
        >
          <Typography
            variant="h4"
            fontWeight={600}
            sx={{ color: "white", fontSize: 28 }}
          >
            3. Networking Opportunities
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "gray", mt: 2, fontSize: 18, lineHeight: 1.8 }}
          >
            Building a successful career is not just about having a great
            skillset about having the right people in your corner. we will connect students with a vibrant ecosystem of
            entrepreneurs, industry experts, and Mentors
            to create invaluable connections that open doors to future
            collaborations and partnerships.
            <br />
            <br />
            <em>
              "Your network is your net worth—accelerate your growth with the
              power of strategic connections."
            </em>
          </Typography>
        </Box>

        {/* International Education Section */}
        <Box
          sx={{
            mb: 6,
            transition: "transform 0.3s, color 0.3s",
            "&:hover": {
              transform: "scale(1.05)",
              color: "#67c3f3",
            },
          }}
        >
          <Typography
            variant="h4"
            fontWeight={600}
            sx={{ color: "white", fontSize: 28 }}
          >
            4. Explore International Education Options
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "gray", mt: 2, fontSize: 18, lineHeight: 1.8 }}
          >
            At Skoolsaver, we open doors for students to explore international education opportunities, equipping them with the knowledge and resources needed to succeed on a global stage.
            Beyond academics, we help students explore the cultural, social, and professional aspects of studying abroad. Students gain access to workshops, webinars, and networking opportunities with alumni and professionals who have navigated the global education landscape. This enables them to understand the challenges and opportunities of studying and working in an international environment.
            Through our support, students are empowered to pursue their dreams and advancing their careers on an international scale.
            <br />
        
            <br />
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default AccleratorProgram;
