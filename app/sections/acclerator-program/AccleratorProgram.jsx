import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { popins } from "@/app/google-fonts/fonts";

const AccleratorProgram = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      {/* Page Title */}
      <Typography
        variant="h2"
        fontSize={40}
        fontWeight={700}
        textAlign="center"
        className={popins.className}
        sx={{ mb: 6, color: "white", textTransform: "uppercase" }}
      >
        Startup Accelerator Program
      </Typography>

      {/* Introduction */}
      <Typography
        variant="body1"
        sx={{ mb: 8, textAlign: "center", color: "gray", fontSize: 20 }}
      >
        Our Accelerator Program is designed to help startups and businesses
        scale rapidly with tailored resources and guidance.
      </Typography>

      {/* Program Details with Hover Effects */}
      <Box>
        {/* Mentorship Section */}
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
            1. Mentorship & Guidance
          </Typography>
          <Typography variant="body1" sx={{ color: "gray", mt: 2, fontSize: 18 }}>
            Our team of experienced mentors provides you with insights,
            strategies, and guidance to help you accelerate your growth.
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
            2. Funding Opportunities
          </Typography>
          <Typography variant="body1" sx={{ color: "gray", mt: 2, fontSize: 18 }}>
            We connect you with a wide range of investors who are actively
            seeking opportunities to fund innovative startups.
          </Typography>
        </Box>

        {/* More Details - Add more sections if needed */}
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
          <Typography variant="body1" sx={{ color: "gray", mt: 2, fontSize: 18 }}>
            Join our exclusive network of entrepreneurs, industry leaders, and
            investors to expand your business connections and increase your
            chances of success.
          </Typography>
        </Box>

        {/* Application Process Section */}
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
            4. Application Process
          </Typography>
          <Typography variant="body1" sx={{ color: "gray", mt: 2, fontSize: 18 }}>
            Our application process is simple and fast. Submit your startup’s
            information, and we will get back to you within 48 hours to discuss
            the next steps.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default AccleratorProgram;
