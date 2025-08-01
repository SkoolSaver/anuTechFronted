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
    <Container maxWidth='lg' sx={{
      marginTop: { xs: '20px', sm: '40px' },
      paddingTop: { xs: '80px', sm: '120px' },
      paddingBottom: 4,
    }}>
      <Stack 
        direction={{ xs: 'column', md: 'row' }} 
        justifyContent='space-between' 
        spacing={{ xs: 4, md: 0 }}
        marginBottom={{ xs: 4, md: 10 }}
      >
        {/* Contact Info Section */}
        <Box 
          width={{ xs: '100%', md: '40%' }} 
          order={{ xs: 2, md: 1 }}
          display='flex' 
          flexDirection='column' 
          gap={2}
        >
          <Typography 
            variant='h2' 
            fontSize={{ xs: 30, md: 40 }} 
            color='white' 
            className={popins.className} 
            fontWeight={600}
            textAlign={{ xs: 'center', md: 'left' }}
          >
            Let Start Your Journey With SkoolSaver.
          </Typography>
          
          <List sx={{ width: '100%' }}>
            <ListItem alignItems="flex-start">
              <ListItemIcon sx={{ minWidth: 40 }}>
                <HomeIcon sx={{ color: "skyblue" }} />
              </ListItemIcon>
              <ListItemText
                primary="Flat- 203 Sri Venkateswara Heights, Vasavi layout, Pragati Nagar, Hyderabad - 500090"
                primaryTypographyProps={{ 
                  color: "white",
                  fontSize: { xs: 14, sm: 16 },
                  lineHeight: 1.4
                }}
              />
            </ListItem>

            <ListItem>
              <ListItemIcon sx={{ minWidth: 40 }}>
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
                primaryTypographyProps={{ 
                  color: "white",
                  fontSize: { xs: 14, sm: 16 }
                }}
              />
            </ListItem>

            <ListItem>
              <ListItemIcon sx={{ minWidth: 40 }}>
                <EmailIcon sx={{ color: "skyblue" }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <a 
                    href='mailto:skoolsaverclub.in' 
                    style={{ 
                      color: 'white', 
                      textDecoration: 'none',
                      wordBreak: 'break-word'
                    }}
                  >
                    skoolsaverclub.in
                  </a>
                }
                primaryTypographyProps={{ 
                  color: "white",
                  fontSize: { xs: 14, sm: 16 }
                }}
              />
            </ListItem>
          </List>
        </Box>

        {/* Contact Form Section */}
        <Box 
          width={{ xs: '100%', md: '55%' }} 
          order={{ xs: 1, md: 2 }}
          sx={{ 
            position: 'relative',
            top: { xs: 0, md: -40 } 
          }}
        >
          <Card
            sx={{
              width: '100%',
              p: { xs: 2, sm: 5 },
              bgcolor: 'transparent',
              color: 'white',
              backgroundImage: "linear-gradient(180deg, #0e0f0e 0%, #141515 100%)",
              boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.3)'
            }}
          >
            <Typography
              variant="h3"
              className={popins.className}
              fontSize={{ xs: 24, sm: 28, md: 35 }}
              fontWeight={600}
              textAlign={{ xs: 'center', md: 'left' }}
            >
              Get In Touch
            </Typography>

            <Box mt={{ xs: 2, sm: 4 }}>
              <ContactUsForm />
            </Box>
          </Card>
        </Box>
      </Stack>
    </Container>
  );
};

export default ContactUs;