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

const Header = () => {
  const pathname = usePathname();

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
          {/* <Box width="20%">
            <Link href="/" underline="none" style={{ textDecoration: "none", display: "flex", alignItems: "center"  }}>
            <Image width={90} height={90} src="/logo.png" alt="Anu Tech Solutionss logo" style={{ objectFit: 'cover' }} /> 
              <Typography variant="h3" className="gradientText" fontSize={35} fontWeight="bold" sx={{ color: '#7A1CAC', ml: 2 }}>
                Anu Tech Solutionss
              </Typography>
            </Link>
          </Box> */}
          <Box width="20%" display="flex" alignItems="center">
            <Link href="/" underline="none" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
              <Image 
                width={150} 
                height={150} 
                src="/logo.png" 
                alt="Anu Tech Solutionss logo" 
                style={{ objectFit: 'cover' }} 
              />
            </Link>
          </Box>
          <Box width="60%" display="flex" gap={4} alignItems="center">
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

            {/* service */}
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
            <Divider
              orientation="vertical"
              variant="middle"
              sx={{ height: 40, background: "white", width: 2 }}
            />
            <Button
              variant="contained"
              href="/get-a-quote"
              sx={{ bgcolor: "white", color: "black" }}
            >
              Book free Consultation
            </Button>
          </Box>
        </Stack>
      </Container>
    </AppBar>
  );
};

export default Header;
