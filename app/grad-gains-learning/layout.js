import React from "react";
import { Box } from "@mui/material";
import Header from "../sections/layout/Header";
import Footer from "../sections/layout/Footer";

export default function Layout({ children }) {
  return (
    <Box>
      <Header />
      {children}
      <Footer />
    </Box>
  );
}
