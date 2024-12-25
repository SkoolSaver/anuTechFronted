"use client";

import * as React from "react";
import Image from "next/legacy/image";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  Stack,
  Typography,
  IconButton,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { nunitoSans, popins } from "@/app/google-fonts/fonts";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

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

const Header = () => {
  const pathname = usePathname();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  // states
  const [isActiveEle, setIsActiveEle] = React.useState(
    pathname.replace("/", "") || "home"
  );

  const handleclick = (ele) => () => {
    setIsActiveEle(ele);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        bgcolor: "#0f0f0f",
        boxShadow: "0px 8px 12px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Container maxWidth="xl" sx={{ p: 2 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          {/* Logo */}
          <Box width="20%" display="flex" alignItems="center">
            <Link href="/" underline="none" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
              <Image 
                width={150} 
                height={150} 
                src="/logo.png" 
                alt="SkoolSaver logo" 
                style={{ objectFit: 'cover' }} 
              />
            </Link>
          </Box>
          
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={handleDrawerToggle}
              >
                <List>
                  {services.map((service) => (
                    <ListItem button key={service.id}>
                      <Link href={service.href}>{service.title}</Link>
                    </ListItem>
                  ))}
                </List>
              </Drawer>
            </>
          ) : (
            <>
              {/* Navigation Links */}
              <Box 
                width="55%"  // Adjusted width for links
                display="flex" 
                gap={4} 
                alignItems="center"
                flexWrap="wrap"  // Allow wrapping if space is limited
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
                  Accelerator Program
                </Box>

                {/* Services Dropdown */}
                <Box
                  display="flex"
                  flexDirection="column"
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

                {/* Other Links */}
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

              {/* Button */}
              <Box width="25%" display="flex" justifyContent="flex-end">
                <Button
                  variant="contained"
                  href="/get-a-quote"
                  sx={{
                    bgcolor: "white",
                    color: "black",
                    flexShrink: 0,  // Prevent shrinking
                  }}
                >
                  Book free Consultation
                </Button>
              </Box>
            </>
          )}
        </Stack>
      </Container>
    </AppBar>
  );
};

export default Header;
