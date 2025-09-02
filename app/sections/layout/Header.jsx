"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Collapse,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
  Button,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { nunitoSans } from "@/app/google-fonts/fonts";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { usePathname } from "next/navigation";

const services = [
  { id: 1, title: "Web Design", href: "/web-design" },
  { id: 2, title: "Web Development", href: "/web-development" },
  { id: 3, title: "App Development", href: "/app-development" },
  { id: 4, title: "Ecommerce Solutions", href: "/ecommerce-solutions" },
  { id: 5, title: "Digital Marketing", href: "/digital-marketing" },
  { id: 6, title: "Graphic & Animations", href: "/graphic-animations" },
];

const drawerWidth = 280;

const Header = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [servicesOpen, setServicesOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
    setServicesOpen(false);
  };

  const toggleServices = () => setServicesOpen((prev) => !prev);

  const isActive = (href) => pathname === href;

  const drawerContent = (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "0",
      }}
    >
      <Box
        sx={{
          p: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Image
          width={90}
          height={90}
          src="/logo.png"
          alt="SkoolSaver logo"
          style={{ objectFit: "cover" }}
        />
        <IconButton onClick={handleDrawerToggle} sx={{ color: "#f0f0f0" }}>
          <CloseIcon />
        </IconButton>
      </Box>

      <Divider sx={{ bgcolor: "rgba(255,255,255,0.1)" }} />
      <List sx={{ flex: 1, overflowY: "auto" }}>
        {/* Main nav items (excluding Contact Us) */}
        {[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about-us" },
          { label: "Products", href: "/products" },
          { label: "Careers", href: "/careers" },
        ].map((item) => (
          <ListItem
            key={item.href}
            component={Link}
            href={item.href}
            onClick={handleDrawerToggle}
            sx={{
              py: 1.5,
              color: isActive(item.href) ? "#3d75ec" : "#f0f0f0",
              "&:hover": { backgroundColor: "rgba(255,255,255,0.05)" },
            }}
          >
            <ListItemText primary={item.label} />
          </ListItem>
        ))}

        {/* Services - now appears before Contact Us */}
        <ListItem
          onClick={toggleServices}
          sx={{
            py: 1.5,
            cursor: "pointer",
            color: "#ffffff",
            "&:hover": { backgroundColor: "rgba(255,255,255,0.05)" },
          }}
        >
          <ListItemText primary="Services" />
          {servicesOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </ListItem>

        <Collapse in={servicesOpen}>
          <List sx={{ bgcolor: "rgba(0,0,0,0.3)" }}>
            {services.map((service) => (
              <ListItem
                key={service.id}
                component={Link}
                href={service.href}
                onClick={handleDrawerToggle}
                sx={{
                  py: 1,
                  pl: 4,
                  color: "#ffffff",
                  "&:hover": { backgroundColor: "rgba(255,255,255,0.03)" },
                }}
              >
                <ListItemText primary={service.title} />
              </ListItem>
            ))}
          </List>
        </Collapse>

        {/* Contact Us moved to bottom */}
        <ListItem
          component={Link}
          href="/contact-us"
          onClick={handleDrawerToggle}
          sx={{
            py: 1.5,
            color: isActive("/contact-us") ? "#3d75ec" : "#f0f0f0",
            "&:hover": { backgroundColor: "rgba(255,255,255,0.05)" },
          }}
        >
          <ListItemText primary="Contact Us" />
        </ListItem>
      </List>
      <Box sx={{ p: 2 }}>
        <Button
          fullWidth
          variant="outlined"
          href="/get-a-quote"
          sx={{
            borderColor: "#3d75ec",
            color: "#3d75ec",
            py: 1.5,
            "&:hover": {
              borderColor: "#5c85e0",
              backgroundColor: "rgba(93, 133, 224, 0.08)",
            },
          }}
        >
          Book Free Consultation
        </Button>
      </Box>
    </Box>
  );

  return (
    <AppBar
      position="sticky"
      sx={{
        bgcolor: "#0f0f0f",
        boxShadow: "0px 8px 12px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2, md: 4 } }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Link href="/">
            <Image
              width={90}
              height={90}
              src="/logo.png"
              alt="Logo"
              style={{ objectFit: "cover" }}
            />
          </Link>

          {/* <Stack
            direction="row"
            spacing={4}
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
          >
            {[
              { label: "Home", href: "/" },
              { label: "About Us", href: "/about-us" },
              { label: "Products", href: "/products" },
              {
                label: "Services",
                href: null,
                dropdown: services,
              },
              { label: "Careers", href: "/careers" },
              { label: "Contact Us", href: "/contact-us" },
            ].map((item) => (
              <Box
                key={item.label}
                sx={{
                  position: "relative",
                  "&:hover .dropdown-content": {
                    display: "block",
                  },
                }}
              >
                {item.href ? (
                  <Link href={item.href} style={{ textDecoration: "none" }}>
                    <Typography
                      sx={{
                        color: isActive(item.href) ? "#6674c0" : "white",
                        fontSize: "1.2rem", // Increased font
                        px: 1.5, // Horizontal padding
                        // py: 1, // Vertical padding
                        transition: "color 0.2s",
                        "&:hover": { color: "#6674c0" },
                      }}
                    >
                      {item.label}
                    </Typography>
                  </Link>
                ) : (
                  <>
                    <Typography
                      sx={{
                        cursor: "pointer",
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,
                        "&:hover": { color: "#6674c0" },
                      }}
                    >
                      {item.label}
                      <KeyboardArrowDownIcon fontSize="small" />
                    </Typography>

                    <Box
                      className="dropdown-content"
                      sx={{
                        display: "none",
                        position: "absolute",
                        top: "100%",
                        left: 0,
                        bgcolor: "#1a1a1a",
                        minWidth: 200,
                        boxShadow: 3,
                        borderRadius: 1,
                        overflow: "hidden",
                        mt: 1,
                      }}
                    >
                      {item.dropdown?.map((service) => (
                        <Link
                          key={service.id}
                          href={service.href}
                          style={{ textDecoration: "none" }}
                        >
                          <Typography
                            sx={{
                              px: 3,
                              fontSize: "1.2rem",
                              py: 1.5,
                              color: isActive(service.href)
                                ? "#6674c0"
                                : "white",
                              "&:hover": {
                                bgcolor: "rgba(255,255,255,0.05)",
                                color: "#6674c0",
                              },
                            }}
                          >
                            {service.title}
                          </Typography>
                        </Link>
                      ))}
                    </Box>
                  </>
                )}
              </Box>
            ))}
          </Stack> */}
          <Stack
            direction="row"
            spacing={4}
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
          >
            {[
              { label: "Home", href: "/" },
              { label: "About Us", href: "/about-us" },
              { label: "Products", href: "/products" },
              {
                label: "Services",
                href: null,
                dropdown: services,
              },
              { label: "Careers", href: "/careers" },
              { label: "Contact Us", href: "/contact-us" },
            ].map((item) => (
              <Box
                key={item.label}
                sx={{
                  position: "relative",
                  "&:hover .dropdown-content": {
                    display: "block",
                  },
                }}
              >
                {item.href ? (
                  <Link href={item.href} style={{ textDecoration: "none" }}>
                    <Typography
                      sx={{
                        color: isActive(item.href) ? "#6674c0" : "white",
                        fontSize: "1.2rem",
                        px: 1.5,
                        transition: "color 0.2s",
                        "&:hover": { color: "#6674c0" },
                      }}
                    >
                      {item.label}
                    </Typography>
                  </Link>
                ) : (
                  <>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        cursor: "pointer",
                        color: "white",
                        gap: 0.5,
                        fontSize: "1.2rem",
                        px: 1.5,
                        "&:hover": { color: "#6674c0" },
                      }}
                    >
                      {item.label}
                      <KeyboardArrowDownIcon fontSize="small" />
                    </Box>

                    <Box
                      className="dropdown-content"
                      sx={{
                        display: "none",
                        position: "absolute",
                        top: "100%",
                        left: 0,
                        bgcolor: "#1a1a1a",
                        minWidth: 200,
                        boxShadow: 3,
                        borderRadius: 1,
                        overflow: "hidden",
                        mt: 1,
                        zIndex: 10,

                        // This ensures the dropdown doesn't hide when mouse moves into it
                        "&:hover": {
                          display: "block",
                        },
                      }}
                    >
                      {item.dropdown?.map((service) => (
                        <Link
                          key={service.id}
                          href={service.href}
                          style={{ textDecoration: "none" }}
                        >
                          <Typography
                            sx={{
                              px: 3,
                              py: 1.5,
                              fontSize: "1.2rem",
                              width:250,
                              color: isActive(service.href)
                                ? "#6674c0"
                                : "white",
                              "&:hover": {
                                bgcolor: "rgba(255,255,255,0.05)",
                                color: "#6674c0",
                              },
                            }}
                          >
                            {service.title}
                          </Typography>
                        </Link>
                      ))}
                    </Box>
                  </>
                )}
              </Box>
            ))}
          </Stack>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Stack>
      </Container>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            bgcolor: "#121212",
            boxSizing: "border-box",
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </AppBar>
  );
};

export default Header;
