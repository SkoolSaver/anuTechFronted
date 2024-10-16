import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { popins } from "@/app/google-fonts/fonts"; // Assuming you are using this font

const AccleratorProgram = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      {/* Page Title */}
      <Typography
        variant="h2"
        fontSize={35}
        fontWeight={600}
        textAlign="center"
        className={popins.className}
        sx={{ mb: 4, color: "white" }}
      >
        Startup Accelerator Program
      </Typography>

      {/* Introduction Section */}
      <Typography
        variant="body1"
        sx={{ mb: 4, textAlign: "center", color: "gray" }}
      >
        Our Accelerator Program is designed to help startups and businesses scale rapidly with tailored resources and guidance.
      </Typography>

      {/* Sections for the Program */}
      <Box>
        {/* Example Section 1 */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" fontWeight={600} color="white">
            1. Mentorship & Guidance
          </Typography>
          <Typography variant="body1" color="gray" sx={{ mt: 2 }}>
            Our team of experienced mentors provides you with insights, strategies, and guidance to help you accelerate your growth.
          </Typography>
        </Box>

        {/* Example Section 2 */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" fontWeight={600} color="white">
            2. Funding Opportunities
          </Typography>
          <Typography variant="body1" color="gray" sx={{ mt: 2 }}>
            We connect you with a wide range of investors who are actively seeking opportunities to fund innovative startups.
          </Typography>
        </Box>

        {/* Add more sections or details about the Accelerator Program as needed */}
      </Box>
    </Container>
  );
};

export default AccleratorProgram;
