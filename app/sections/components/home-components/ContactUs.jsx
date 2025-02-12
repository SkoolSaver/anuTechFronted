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
    <Container maxWidth='lg'  sx={{
      marginTop: '20px', // Additional top margin
      paddingTop: { xs: '100px', sm: '120px' }, // Adjust for different screen sizes
    }}>
      <Stack direction='row' justifyContent='space-between' marginBottom={10}>
        <Box width='40%' display='flex' flexDirection='column' gap={2}>
          <Typography variant='h2' fontSize={40} color='white' className={popins.className} fontWeight={600}>
            Let Start Your Journey With SkoolSaver.
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
                      +918309782214
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
                    <a href='mailto:saverskool@gmail.com' style={{ color: 'white', textDecoration: 'none' }}>
                      saverskool@gmail.com
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
