import ContactUsForm from "@/app/components/contact-us/ContactUsForm";
import { nunitoSans, popins } from "@/app/google-fonts/fonts";
import HomeIcon from "@mui/icons-material/Home";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  Box,
  Button,
  Card,
  Container,
  Divider,
  Grid,
  Icon,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import MainTitle from "../common/MainTitle";

const ContactUsPage = () => {
  return (
    <>
      {/* form and starting template */}
      <MainTitle title="Contact Us" />

      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Stack direction="row" spacing={5} alignItems="start">
          <Card
            sx={{
              width: "40%",
              p: 5,
              bgcolor: "transparent",
              color: "white",
              backgroundImage:
                "linear-gradient(180deg, #0e0f0e 0%, #141515 100%)",
              color: "white",
            }}
          >
            <Typography
              variant="h3"
              className={popins.className}
              fontSize={35}
              fontWeight={600}
              color="white"
            >
              Get In Touch
            </Typography>

            <Box mt={4}>
              <ContactUsForm />
            </Box>
          </Card>
          <Stack width="45%" spacing={6} pt={5}>
            <Typography
              variant="h3"
              fontSize={35}
              className={popins.className}
              fontWeight={600}
              color="white"
            >
              Skool Saver Address
            </Typography>
            <Stack direction="row" spacing={2}>
              <Icon
                sx={{
                  bgcolor: "orange",
                  p: 3,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <HomeIcon sx={{ fontSize: 25, color: "white" }} />
              </Icon>
              <Box display="flex" flexDirection="column" gap={2}>
                <Typography
                  variant="h3"
                  className={popins.className}
                  fontWeight={600}
                  fontSize={18}
                  color="white"
                >
                  Registered office
                </Typography>
                <Typography
                  color="white"
                  variant="body1"
                  className={nunitoSans.className}
                >
                  <strong>Patna - 301,</strong>
                  Siddhi Vinayak Apartment, Yarpur Khagul Road, Yarpur, Patna -
                  800001
                </Typography>
              </Box>
            </Stack>
            <Divider />
            <Stack direction="row" spacing={2}>
              <Icon
                sx={{
                  bgcolor: "purple",
                  p: 3,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <HomeIcon sx={{ fontSize: 25, color: "white" }} />
              </Icon>
              <Box display="flex" flexDirection="column" gap={2}>
                <Typography
                  variant="h3"
                  className={popins.className}
                  fontWeight={600}
                  fontSize={18}
                  color="white"
                >
                  Corporate office
                </Typography>
                <Typography
                  variant="body1"
                  color="white"
                  className={nunitoSans.className}
                >
                  <strong>Pune -</strong>
                  1873 ,Corporate Arena, Keshavrao Bhumkar chowk, Narhe, Pune -
                  411041
                </Typography>
              </Box>
            </Stack>
          </Stack>
        </Stack>
        <Box>
          <Divider sx={{ my: 8 }} />

          <Typography
            variant="h3"
            my={8}
            textAlign="center"
            fontSize={35}
            className={popins.className}
            fontWeight={600}
            color="white"
          >
            Regional Office
          </Typography>

          <Stack
            direction="row"
            flexWrap="wrap"
            gap={2}
            justifyContent="center"
          >
            <Card
              sx={{
                display: "flex",
                bgcolor: "black",
                p: 4,
                transition: "transform 0.3s ease",

                border: "1px solid white",
                gap: 2,
                maxWidth: 350,

                "&:hover": {
                  background: "#0f0f0f",
                  transform: "scale(1.05)",
                },
              }}
            >
              <Icon
                sx={{
                  bgcolor: "orange",
                  p: 3,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <LocationOnIcon sx={{ fontSize: 25, color: "white" }} />
              </Icon>
              <Box>
                <Typography
                  variant="h3"
                  color="white"
                  fontSize={18}
                  className={popins.className}
                  fontWeight={600}
                >
                  Lucknow
                </Typography>
                <Typography
                  variant="body1"
                  fontSize={16}
                  className={nunitoSans.className}
                  mt={2}
                  color="white"
                >
                  Sadhna Bhavan ,1st Floor ,L-3/83 , Sector- D , Aliganj
                  ,Pincode -226024 , Uttar-Pradesh , landmark- Near UPPSC
                  Building.
                </Typography>
              </Box>
            </Card>
            <Card
              sx={{
                display: "flex",
                bgcolor: "black",
                border: "1px solid white",
                p: 4,
                transition: "transform 0.3s ease",

                gap: 2,
                maxWidth: 350,
                "&:hover": {
                  background: "#0f0f0f",
                  transform: "scale(1.05)",
                },
              }}
            >
              <Icon
                sx={{
                  bgcolor: "purple",
                  p: 3,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <LocationOnIcon sx={{ fontSize: 25, color: "white" }} />
              </Icon>
              <Box>
                <Typography
                  variant="h3"
                  fontSize={18}
                  color="white"
                  className={popins.className}
                  fontWeight={600}
                >
                  Bangalore
                </Typography>
                <Typography
                  variant="body1"
                  fontSize={16}
                  color="white"
                  className={nunitoSans.className}
                  mt={2}
                >
                  Chetan Murty , #300, Forest Layout, RVCE Post , Bangalore –
                  560059,Karnataka
                </Typography>
              </Box>
            </Card>
            <Card
              sx={{
                display: "flex",
                bgcolor: "black",
                border: "1px solid white",
                transition: "transform 0.3s ease",

                p: 4,
                gap: 2,
                maxWidth: 350,
                "&:hover": {
                  background: "#0f0f0f",
                  transform: "scale(1.05)",
                },
              }}
            >
              <Icon
                sx={{
                  bgcolor: "palevioletred",
                  p: 3,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <LocationOnIcon sx={{ fontSize: 25, color: "white" }} />
              </Icon>
              <Box>
                <Typography
                  variant="h3"
                  fontSize={18}
                  className={popins.className}
                  fontWeight={600}
                  color="white"
                >
                  Pune
                </Typography>
                <Typography
                  variant="body1"
                  color="white"
                  fontSize={16}
                  className={nunitoSans.className}
                  mt={2}
                >
                  1873, Corporate Arena, Keshavrao Bhumkar Chowk, Narhe , Pune –
                  411041, Maharashtra
                </Typography>
              </Box>
            </Card>
            <Card
              sx={{
                bgcolor: "black",
                border: "1px solid white",
                display: "flex",
                p: 4,
                gap: 2,
                transition: "transform 0.3s ease",
                maxWidth: 350,
                "&:hover": {
                  background: "#0f0f0f",
                  transform: "scale(1.05)",
                },
              }}
            >
              <Icon
                sx={{
                  bgcolor: "green",
                  p: 3,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <LocationOnIcon sx={{ fontSize: 25, color: "white" }} />
              </Icon>
              <Box>
                <Typography
                  variant="h3"
                  fontSize={18}
                  color="white"
                  className={popins.className}
                  fontWeight={600}
                >
                  Patna
                </Typography>
                <Typography
                  variant="body1"
                  fontSize={16}
                  color="white"
                  className={nunitoSans.className}
                  mt={2}
                >
                  301 , Siddhi Vinayak Apartment, Yarpur -khagul Road,
                  Yarpur,Patna- 800001,Bihar
                </Typography>
              </Box>
            </Card>
          </Stack>
        </Box>
      </Container>
    </>
  );
};

export default ContactUsPage;
