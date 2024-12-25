import ContactUsForm from "@/app/components/contact-us/ContactUsForm";
import { nunitoSans, popins } from "@/app/google-fonts/fonts";
import {
  Box,
  Card,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const ContactUs = () => {
  return (
    <Container maxWidth="lg">
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        marginBottom={10}
      >
        <Box
          width={{ xs: "100%", sm: "40%" }}
          display="flex"
          flexDirection="column"
          gap={2}
        >
          <Typography
            variant="h2"
            fontSize={{ xs: 28, sm: 32, md: 40 }}
            color="white"
            className={popins.className}
            fontWeight={600}
          >
            Let Start Your Project With Us.
          </Typography>
          <Typography
            variant="body1"
            color="white"
            className={nunitoSans.className}
          >
            Let’s know what type of project you need for your business! If still
            confused, contact us or come to live chat to contact our customer
            support executives! Your queries will be answered!
          </Typography>

          <Stack>
            <List>
              <ListItem>
                <ListItemIcon>
                  <HomeIcon sx={{ color: "skyblue" }} />
                </ListItemIcon>
                <ListItemText
                  primary="Flat- 203 Sri Venkateswara Heights, Vasavi layout, Pragati Nagar, Hyderabad - 500090"
                  primaryTypographyProps={{ color: "white" }}
                />
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <PhoneIcon sx={{ color: "skyblue" }} />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <a
                      href="tel:+918309782214"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      +91 9876543210
                    </a>
                  }
                  primaryTypographyProps={{ color: "white" }}
                />
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <EmailIcon sx={{ color: "skyblue" }} />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <a
                      href="gopigollamandala9999@gmail.com"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      gopigollamandala9999@gmail.com
                    </a>
                  }
                  primaryTypographyProps={{ color: "white" }}
                />
              </ListItem>
            </List>
          </Stack>
        </Box>
        <Box width={{ xs: "100%", sm: "40%" }}>
          <Card
            sx={{
              width: "100%",
              p: 5,
              bgcolor: "transparent",
              color: "white",
              backgroundImage:
                "linear-gradient(180deg, #0e0f0e 0%, #141515 100%)",
            }}
          >
            <Typography
              variant="h3"
              className={popins.className}
              fontSize={{ xs: 24, sm: 28, md: 35 }}
              fontWeight={600}
            >
              Get In Touch
            </Typography>

            <Box mt={4}>
              <ContactUsForm />
            </Box>
          </Card>
        </Box>
      </Stack>
    </Container>
  );
};

export default ContactUs;
