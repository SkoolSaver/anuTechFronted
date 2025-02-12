"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { nunitoSans, popins } from "@/app/google-fonts/fonts";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { usePathname, useRouter } from "next/navigation";

// services
const services = [
  {
    id: 1,
    title: "Web Design",
    href: "/web-design",
  },
  {
    id: 2,
    title: "Web Development",
    href: "/web-development",
  },
  {
    id: 3,
    title: "App Development",
    href: "/app-development",
  },
  {
    id: 4,
    title: "Ecommerce Solutions",
    href: "/ecommerce-solutions",
  },
  {
    id: 5,
    title: "Digital Marketing",
    href: "/digital-marketing",
  },
  {
    id: 6,
    title: "Graphic & Animations",
    href: "/graphic-animations",
  },
];

// packages
const packages = [
  {
    id: 1,
    title: "Website Development Packages",
    href: "/website-development-packages",
  },
  {
    id: 2,
    title: "eCommerce Development Packages",
    href: "/ecommerce-development-packages",
  },
  {
    id: 3,
    title: "Logo and Graphic Packages",
    href: "/logo-graphic-packages",
  },
  {
    id: 4,
    title: "SEO Packages",
    href: "/seo-packages",
  },
  {
    id: 5,
    title: "Website Maintenance Package",
    href: "/website-maintenance-package",
  },
];
const linkObj = {
  textDecoration: "none",
  fontSize: "1rem",
  fontWeight: 500,
  whiteSpace: "nowrap",
  "&:hover": {
    color: "#6674c0",
  },
};
const drawerWidth = 240;
const Header = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  // states
  const [isActiveEle, setIsActiveEle] = React.useState(
    pathname.replace("/", "") || "home"
  );

  const handleclick = (ele) => () => {
    setIsActiveEle(ele);
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container =
    typeof window !== "undefined" ? window.document.body : undefined;

  return (
    <AppBar
      sx={{
        bgcolor: "#0f0f0f",
        boxShadow: "0px 8px 12px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            backgroundColor: "#121212", // Dark background
            color: "#f0f0f0", // Light text
          },
        }}
      >
        {/* Title */}
        <Typography
          variant="h3"
          className="gradientText"
          fontSize={35}
          sx={{
            color: "#3d75ec", // Accent color for the title
            textAlign: "center",
            my: 2,
          }}
        >
          SkoolSaver
        </Typography>

        <Divider sx={{ backgroundColor: "#3d75ec" }} />

        {/* Navigation Items */}
        <Box
          onClick={handleclick("home")}
          component={Link}
          href="/"
          className={nunitoSans.className}
          sx={linkObj}
          color={isActiveEle === "home" ? "#3d75ec" : "#f0f0f0"}
          p={1.5}
        >
          Home
        </Box>

        <Box
          onClick={handleclick("about-us")}
          component={Link}
          href="/about-us"
          className={nunitoSans.className}
          sx={linkObj}
          color={isActiveEle === "about-us" ? "#3d75ec" : "#f0f0f0"}
          p={1.5}
        >
          About Us
        </Box>

        {/* Services Dropdown */}
        <Box
          display="flex"
          flexDirection="column"
          sx={linkObj}
          position="relative"
          className="parent-services"
          p={1.5}
          color="#f0f0f0"
        >
          <Box display="flex" alignItems="center">
            <Typography className={nunitoSans.className}>Services</Typography>
            <KeyboardArrowDownIcon />
          </Box>
          <Stack
            className="child-services"
            position="absolute"
            zIndex={1}
            top={40}
            left={10}
            borderTop="2px solid #3d75ec"
            bgcolor="#1e1e1e"
            borderRadius="5px"
          >
            <List
              sx={{
                display: "flex",
                flexDirection: "column",
                width: 250,
                bgcolor: "#1e1e1e",
                borderRadius: "5px",
              }}
            >
              {services.map((service, index) => (
                <React.Fragment key={service.id}>
                  <ListItem sx={{ py: 1.5 }}>
                    <Box
                      component="a"
                      href={service.href}
                      className={nunitoSans.className}
                      sx={{
                        textDecoration: "none",
                        color: "#f0f0f0",
                        fontSize: "16px",
                        transition: "color 0.3s",
                        "&:hover": {
                          color: "#3d75ec",
                        },
                      }}
                    >
                      {service.title}
                    </Box>
                  </ListItem>
                  {index < services.length - 1 && (
                    <Divider sx={{ bgcolor: "#3d75ec" }} />
                  )}
                </React.Fragment>
              ))}
            </List>
          </Stack>
        </Box>

        <Box
          onClick={handleclick("products")}
          component={Link}
          href="/products"
          className={nunitoSans.className}
          sx={linkObj}
          color={isActiveEle === "products" ? "#3d75ec" : "#f0f0f0"}
          p={1.5}
        >
          Products
        </Box>

        <Box
          onClick={handleclick("careers")}
          component={Link}
          href="/careers"
          className={nunitoSans.className}
          sx={linkObj}
          color={isActiveEle === "careers" ? "#3d75ec" : "#f0f0f0"}
          p={1.5}
        >
          Careers
        </Box>

        <Box
          onClick={handleclick("contact-us")}
          component={Link}
          href="/contact-us"
          className={nunitoSans.className}
          sx={linkObj}
          color={isActiveEle === "contact-us" ? "#3d75ec" : "#f0f0f0"}
          p={1.5}
        >
          Contact Us
        </Box>

        <Divider sx={{ backgroundColor: "#3d75ec", my: 2 }} />

        {/* Book Consultation Button */}
        <Button
          variant="contained"
          href="/get-a-quote"
          sx={{
            bgcolor: "#3d75ec",
            color: "white",
            textTransform: "none",
            mx: "auto",
            my: 2,
            display: "block",
            "&:hover": {
              bgcolor: "#5c85e0",
            },
          }}
        >
          Book Free Consultation
        </Button>
      </Drawer>

      <Container maxWidth="xl" sx={{ p: 2 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          {/* Logo */}
          <Box width="auto" display="flex" alignItems="center">
            <Link href="/" underline="none" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
              <Image 
                width={90} 
                height={90} 
                src="/logo.png"                 alt="SkoolSaver logo"  
                style={{ objectFit: 'cover' }} 
              />
            </Link>
          </Box>
          
          {/* Navigation Links */}
          <Box 
            width="auto"  // Adjusted width for links
            display="flex" 
            gap={4} 
            alignItems="center"
            flexWrap="wrap"  // Allow wrapping if space is limited
            marginRight={4}
          >
            <Box
              onClick={handleclick("home")}
              component={Link}
              href="/"
              className={nunitoSans.className}
              sx={linkObj}
              color={isActiveEle === "home" ? "#6674c0" : "white"}
            >
              Home
            </Box>
            <Box
              onClick={handleclick("about-us")}
              component={Link}
              href="/about-us"
              className={nunitoSans.className}
              sx={linkObj}
              color={isActiveEle === "about-us" ? "#6674c0" : "white"}
            >
              About Us
            </Box>

            <Box
              onClick={handleclick("acclerator-program")}
              component={Link}
              href="/acclerator-program"
              className={nunitoSans.className}
              sx={linkObj}
              color={isActiveEle === "acclerator-program" ? "#6674c0" : "white"}
            >
              Our Doctirine
            </Box>
            
            {/* Services Dropdown */}
            {/*
            <Box
              display="flex"
              flexDirection="column"
              spacing={2}
              sx={linkObj}
              height={23} 
              position="relative"
              className="parent-services"
            >
              <Box display="flex">
                <Typography className={nunitoSans.className}>
                  Services
                </Typography>
                <KeyboardArrowDownIcon />
              </Box>

              <Stack
                className="child-services"
                position="absolute"
                zIndex={1}
                top={25}
                borderTop="2px solid #008080"
              >
                <List
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: 250,
                    bgcolor: "white",
                  }}
                >
                  {services.map((service, index) => (
                    <React.Fragment key={service.id}>
                      <ListItem sx={{ py: 1.5 }}>
                        <Box
                          component="a"
                          href={service.href}
                          className={nunitoSans.className}
                          sx={{
                            textDecoration: "none",
                            color: "black",
                            fontSize: "16px",
                            transition: "color 0.3s",
                            "&:hover": {
                              color: "#3d75ec",
                            },
                          }}
                        >
                          {service.title}
                        </Box>
                      </ListItem>
                      {index < services.length - 1 && <Divider />}
                    </React.Fragment>
                  ))}
                </List>
              </Stack>
            </Box>
            {/* packages */}

            <Box
              onClick={handleclick("products")}
              component={Link}
              href="/products"
              className={nunitoSans.className}
              sx={linkObj}
              color={isActiveEle === "products" ? "#6674c0" : "white"}
            >
              Products
            </Box>

            <Box
              onClick={handleclick("careers")}
              component={Link}
              href="/careers"
              className={nunitoSans.className}
              sx={linkObj}
              color={isActiveEle === "careers" ? "#6674c0" : "white"}
            >
              Careers
            </Box>

            <Box
              onClick={handleclick("contact-us")}
              component={Link}
              href="/contact-us"
              className={nunitoSans.className}
              sx={linkObj}
              color={isActiveEle === "contact-us" ? "#6674c0" : "white"}
            >
              Contact Us
            </Box>
          </Box>
        </Stack>
      </Container>
    </AppBar>
  );
};

export default Header;
