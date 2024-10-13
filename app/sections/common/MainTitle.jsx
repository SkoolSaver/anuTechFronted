import { popins } from "@/app/google-fonts/fonts";
import { Container, Typography } from "@mui/material";
import React from "react";

const MainTitle = ({ title }) => {
  return (
    <Container maxWidth="lg" sx={{ p: 10 }}>
      <Typography
        textAlign="center"
        className={popins.className}
        fontWeight={600}
        variant="h3"
        color="white"
      >
        {title}
      </Typography>
    </Container>
  );
};

export default MainTitle;
