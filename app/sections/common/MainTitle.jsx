import { popins } from "@/app/google-fonts/fonts";
import { Container, Typography } from "@mui/material";
import React from "react";

const MainTitle = ({ title }) => {
  return (
    <Container maxWidth="lg" sx={{ p: 5 }}>
      <Typography
        textAlign="center"
        sx={{
          fontWeight: 600,
          fontFamily: popins.className, // Apply the font-family directly to sx
          fontSize: "2.25rem", // Equivalent to `h3` font size, adjust if needed
          color: "white",
        }}
        variant="h3"
      >
        {title}
      </Typography>
    </Container>
  );
};

export default MainTitle;
