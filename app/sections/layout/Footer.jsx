"use client";
import {
  Box,
  Button,
  Card,
  Container,
  Divider,
  Grid,
  IconButton,
  keyframes,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { nunitoSans, popins } from "@/app/google-fonts/fonts";
import { footerData, socialMedia } from "@/app/utils/constants";
import Image from "next/legacy/image";
import styled from "@emotion/styled";

const footerDesigns = [
  { id: 1, image: "asset 1.png", title: "React JS" },
  { id: 2, image: "asset 2.png", title: "Node JS" },
  { id: 3, image: "asset 3.png", title: "Redux" },
  { id: 4, image: "asset 4.png", title: "Tailwind CSS" },
  { id: 5, image: "asset 5.png", title: "Bootstrap" },
  { id: 6, image: "asset 6.png", title: "Sass" },
  { id: 7, image: "asset 7.png", title: "HTML" },
  { id: 8, image: "asset 8.png", title: "CSS" },
  { id: 9, image: "asset 9.png", title: "JavaScript" },
  { id: 10, image: "asset 10.png", title: "Python" },
  { id: 11, image: "asset 11.png", title: "MySQL" },
];

const scrollAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const ScrollWrapper = styled("div")({
  display: "flex",
  width: "200%",
  animation: `${scrollAnimation} 20s linear infinite`,
});

const Footer = () => {
  return (
    <>
      <Container maxWidth="md">
        <Stack spacing={2}>
          <Typography
            textAlign="center"
            className={popins.className}
            fontWeight={600}
            color="#e0e0e0"
            variant="h4"
          >
            Get here 360-degree advance automated software.
          </Typography>
          <Typography px={8} textAlign="center" variant="body1" color="#d0d0d0">
            We leverage the Web and mobile App opportunity to create a solid
            end-user experience to urge your brand’s augmentation.
          </Typography>
          <Box display="flex" justifyContent="center">
            <Button
              variant="contained"
              sx={{ bgcolor: "white", color: "black" }}
            >
              Book free Consultation
            </Button>
          </Box>
        </Stack>
      </Container>

      <Box pt={5}>
        <Container maxWidth="lg" sx={{ py: 10, overflow: "hidden" }}>
          <ScrollWrapper>
            <Stack direction="row" spacing={2}>
              {footerDesigns.map((ele) => (
                <Card
                  key={ele.id}
                  sx={{
                    p: 2,
                    cursor: "pointer",
                    borderRadius: 4,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 180,
                    height: 120,
                    bgcolor: "#050020",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "translate(0, 0) scale(1.1)",
                    },
                  }}
                >
                  <Image
                    width={48}
                    height={48}
                    src={`/${ele.image}`}
                    alt={ele.title}
                  />
                  <Typography
                    color="white"
                    className={popins.className}
                    fontWeight={600}
                  >
                    {ele.title}
                  </Typography>
                </Card>
              ))}
            </Stack>
          </ScrollWrapper>
        </Container>
        <Container maxWidth="xs" sx={{ pb: 5 }}>
          <Stack direction="row" justifyContent="space-around">
            {socialMedia.map((social) => (
              <IconButton
                key={social.id}
                sx={{
                  border: "1px solid skyblue",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.2)",
                  },
                }}
                component="a"
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {React.cloneElement(social.icon, {
                  sx: { color: social.color },
                })}
              </IconButton>
            ))}
          </Stack>
        </Container>
        <Divider sx={{ borderColor: "lightskyblue" }} />
        <Container maxWidth="lg">
          <Stack p={2}>
            <Grid container alignItems="center">
              <Grid item xs={4}>
                <Typography
                  variant="h6"
                  fontSize={14}
                  color="white"
                  sx={{ pointerEvents: "none" }}
                >
                  &copy; 2024 All Rights Reserved
                </Typography>
              </Grid>
              <Grid item xs={7} justifyContent="end">
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={2}
                  sx={{ placeContent: "end" }}
                >
                  <Box display="flex" alignItems="center">
                    <KeyboardDoubleArrowRightIcon
                      sx={{ color: "green", fontSize: 14 }}
                    />
                    <Typography color="white" variant="h6" fontSize={14}>
                      <a href="/privacy-policy" style={{ color: 'white' }}>Privacy  Policy</a>
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center">
                    <KeyboardDoubleArrowRightIcon
                      sx={{ color: "green", fontSize: 14 }}
                    />
                    <Typography color="white" variant="h6" fontSize={14}>
                      <a href="/terms-conditions" style={{ color: 'white' }}>Terms & Conditions</a>
                    </Typography>
                  </Box>
                </Stack>
              </Grid>
            </Grid>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
