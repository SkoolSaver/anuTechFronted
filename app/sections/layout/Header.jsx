"use client";

import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  Typography,
  Divider,
  Stack,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import Image from "next/legacy/image";
import { KeyboardArrowDown } from "@mui/icons-material";

const services = [
  { id: 1, title: "Web Design", href: "/web-design" },
  { id: 2, title: "Web Development", href: "/web-development" },
  { id: 3, title: "App Development", href: "/app-development" },
  { id: 4, title: "Ecommerce Solutions", href: "/ecommerce-solutions" },
  { id: 5, title: "Digital Marketing", href: "/digital-marketing" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDrawer = () => setMobileOpen(!mobileOpen);

  const drawer = (
    <Box onClick={toggleDrawer} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        SkoolSaver
      </Typography>
      <Divider />
      <List>
        <ListItem>
          <Link href="/" style={{ textDecoration: "none", color: "black" }}>
            Home
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href="/about-us"
            style={{ textDecoration: "none", color: "black" }}
          >
            About Us
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href="/services"
            style={{ textDecoration: "none", color: "black" }}
          >
            Services
          </Link>
        </ListItem>
        {services.map((service) => (
          <ListItem key={service.id}>
            <Link
              href={service.href}
              style={{ textDecoration: "none", color: "black" }}
            >
              {service.title}
            </Link>
          </ListItem>
        ))}
        <ListItem>
          <Link
            href="/contact-us"
            style={{ textDecoration: "none", color: "black" }}
          >
            Contact Us
          </Link>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar
      position="sticky"
      sx={{
        bgcolor: "#0f0f0f",
        padding: { xs: "0 16px", md: "0 24px" },
        boxShadow: "0px 8px 12px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ height: { xs: "64px", md: "80px" } }}
      >
        {/* Logo */}
        <Box display="flex" alignItems="center">
          <Link href="/" style={{ textDecoration: "none" }}>
            <Image
              width={100}
              height={40}
              src="/logo.png"
              alt="SkoolSaver logo"
            />
          </Link>
        </Box>

        {/* Navigation Links */}
        <Box
          display={{ xs: "none", md: "flex" }}
          gap={3}
          alignItems="center"
          flexWrap="nowrap"
        >
          <Link href="/" style={{ textDecoration: "none", color: "white" }}>
            Home
          </Link>
          <Link
            href="/about-us"
            style={{ textDecoration: "none", color: "white" }}
          >
            About Us
          </Link>
          <Box display="flex" alignItems="center" position="relative">
            <Typography color="white" sx={{ cursor: "pointer" }}>
              Services
            </Typography>
            <KeyboardArrowDown sx={{ color: "white" }} />
          </Box>
          <Link
            href="/contact-us"
            style={{ textDecoration: "none", color: "white" }}
          >
            Contact Us
          </Link>
        </Box>

        {/* Hamburger Menu */}
        <IconButton
          color="inherit"
          edge="start"
          onClick={toggleDrawer}
          sx={{ display: { md: "none" } }}
        >
          <MenuIcon />
        </IconButton>

        {/* Book Free Consultation */}
        <Button
          variant="contained"
          href="/get-a-quote"
          sx={{
            bgcolor: "white",
            color: "black",
            display: { xs: "none", md: "block" },
          }}
        >
          Book Free Consultation
        </Button>
      </Box>

      {/* Drawer for Mobile */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={toggleDrawer}
        sx={{ display: { md: "none" } }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Header;
