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
          <Box width={isMobile ? "30%" : "20%"} display="flex" alignItems="center">
            <Link href="/" underline="none" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
              <Image 
                width={isMobile ? 100 : 150} 
                height={isMobile ? 100 : 150} 
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
                  <ListItem button>
                    <Link href="/" style={{ textDecoration: 'none', color: 'black' }}>Home</Link>
                  </ListItem>
                  <ListItem button>
                    <Link href="/about-us" style={{ textDecoration: 'none', color: 'black' }}>About Us</Link>
                  </ListItem>
                  <ListItem button>
                    <Link href="/acclerator-program" style={{ textDecoration: 'none', color: 'black' }}>Accelerator Program</Link>
                  </ListItem>
                  <ListItem button>
                    <Link href="/products" style={{ textDecoration: 'none', color: 'black' }}>Products</Link>
                  </ListItem>
                  <ListItem button>
                    <Link href="/careers" style={{ textDecoration: 'none', color: 'black' }}>Careers</Link>
                  </ListItem>
                  <ListItem button>
                    <Link href="/contact-us" style={{ textDecoration: 'none', color: 'black' }}>Contact Us</Link>
                  </ListItem>
                  <Divider />
                  {services.map((service) => (
                    <ListItem button key={service.id}>
                      <Link href={service.href} style={{ textDecoration: 'none', color: 'black' }}>{service.title}</Link>
                    </ListItem>
                  ))}
                </List>
              </Drawer>
            </>
          ) : (
            <Stack direction="row" spacing={2}>
              <Button color="inherit">
                <Link href="/" style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
              </Button>
              <Button color="inherit">
                <Link href="/about-us" style={{ textDecoration: 'none', color: 'white' }}>About Us</Link>
              </Button>
              <Button color="inherit">
                <Link href="/acclerator-program" style={{ textDecoration: 'none', color: 'white' }}>Accelerator Program</Link>
              </Button>
              <Button color="inherit">
                <Link href="/products" style={{ textDecoration: 'none', color: 'white' }}>Products</Link>
              </Button>
              <Button color="inherit">
                <Link href="/careers" style={{ textDecoration: 'none', color: 'white' }}>Careers</Link>
              </Button>
              <Button color="inherit">
                <Link href="/contact-us" style={{ textDecoration: 'none', color: 'white' }}>Contact Us</Link>
              </Button>
              <Box display="flex" flexDirection="column" sx={linkObj} height={23} position="relative" className="parent-services">
                <Box display="flex">
                  <Typography className={nunitoSans.className}>Services</Typography>
                  <KeyboardArrowDownIcon />
                </Box>
                <Stack className="child-services" position="absolute" zIndex={1} top={25} borderTop="2px solid #008080">
                  <List sx={{ display: "flex", flexDirection: "column", width: 250, bgcolor: "white" }}>
                    {services.map((service, index) => (
                      <React.Fragment key={service.id}>
                        <ListItem sx={{ py: 1.5 }}>
                          <Box component="a" href={service.href} className={nunitoSans.className} sx={{ textDecoration: "none", color: "black", fontSize: "16px", transition: "color 0.3s", "&:hover": { color: "#3d75ec" } }}>
                            {service.title}
                          </Box>
                        </ListItem>
                        {index < services.length - 1 && <Divider />}
                      </React.Fragment>
                    ))}
                  </List>
                </Stack>
              </Box>
            </Stack>
          )}
        </Stack>
      </Container>
    </AppBar>
  );
};

export default Header;
