import ContactUsForm from "@/app/components/contact-us/ContactUsForm";
import { nunitoSans, popins } from "@/app/google-fonts/fonts";
import { Box, Card, Container, Stack, Typography } from "@mui/material";
import React from "react";
import MainTitle from "../common/MainTitle";

const ContactUsPage = () => {
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          paddingTop: '20px', // Fixed padding to ensure the title is not covered
          mb: 8,
        }}
      >
        <MainTitle
          title="Contact Us"
          sx={{
            scrollMarginTop: '50px', // Ensure anchor links work correctly
          }}
        />

        <Stack 
          direction={{ xs: "column", md: "row" }} 
          spacing={5} 
          alignItems="start"
        >
          <Card
            sx={{
              width: { xs: "100%", md: "40%" },
              p: 5,
              bgcolor: "transparent",
              backgroundImage: "linear-gradient(180deg, #0e0f0e 0%, #141515 100%)",
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

          <Stack width={{ xs: "100%", md: "45%" }} spacing={4} pt={5}>
            <Typography
              variant="h3"
              fontSize={35}
              className={popins.className}
              fontWeight={600}
              color="white"
            >
              Contact Information
            </Typography>

            <Box>
              <Typography color="white" className={nunitoSans.className} mb={2}>
                You may contact us using the information below:
              </Typography>
              <Typography color="white" className={nunitoSans.className}>
                <strong>Merchant Legal entity name:</strong> SKOOLSAVER PRIVATE LIMITED
              </Typography>
              <Typography color="white" className={nunitoSans.className} mt={1}>
                <strong>Registered Address:</strong> Flat 203, Sri Venkateswara Heights, Vasavai Layout, Pragatinagar, Hyderabad, Telangana, India, PIN: 500090
              </Typography>
              <Typography color="white" className={nunitoSans.className} mt={1}>
                <strong>Operational Address:</strong> Flat 203, Sri Venkateswara Heights, Vasavai Layout, Pragatinagar, Hyderabad, Telangana, India, PIN: 500090
              </Typography>
              <Typography color="white" className={nunitoSans.className} mt={1}>
                <strong>Telephone No:</strong> 8309782214
              </Typography>
              <Typography color="white" className={nunitoSans.className} mt={1}>
                <strong>E-Mail ID:</strong> gopi@skoolsaver.com
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </>
  );
};

export default ContactUsPage;
