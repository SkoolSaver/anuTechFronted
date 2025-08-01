import { Box } from "@mui/material";
import Header from "../sections/layout/Header";
import Footer from "../sections/layout/Footer";

const Layout = ({ children }) => {
  return (
    <Box>
      <Header />
      {children}
      <Footer />
    </Box>
  );
};

export default Layout;
