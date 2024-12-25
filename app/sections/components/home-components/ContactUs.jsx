import ContactUsForm from '@/app/components/contact-us/ContactUsForm';
import { nunitoSans, popins } from '@/app/google-fonts/fonts';
import { Box, Card, Container, List, ListItem, ListItemIcon, ListItemText, Stack, Typography, TextField, Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const ContactUs = () => {
  return (
    <Container maxWidth='lg' sx={{ mt: 4 }}>
      <Stack direction={{ xs: 'column', md: 'row' }} justifyContent='space-between' marginBottom={10} spacing={4}>
        <Box width={{ xs: '100%', md: '40%' }} display='flex' flexDirection='column' gap={2}>
          <Typography variant='h2' fontSize={40} color='white' className={popins.className} fontWeight={600}>
            Let Start Your Project With Us.
          </Typography>
          <Typography variant='body1' color='white' className={nunitoSans.className}>
            Let’s know what type of project you need for your business! If still confused, contact us or come to live chat to contact our
            customer support executives! Your queries will be answered!
          </Typography>

          <Stack>
            <List>
              {/* Home Address */}
              <ListItem>
                <ListItemIcon>
                  <HomeIcon sx={{ color: 'skyblue' }} />
                </ListItemIcon>
                <ListItemText
                  primary="Flat- 203 Sri Venkateswara Heights, Vasavi layout, Pragati Nagar, Hyderabad - 500090"
                  primaryTypographyProps={{ color: 'white', className: nunitoSans.className }}
                />
              </ListItem>
              {/* Phone */}
              <ListItem>
                <ListItemIcon>
                  <PhoneIcon sx={{ color: 'skyblue' }} />
                </ListItemIcon>
                <ListItemText
                  primary="+91 8309782214"
                  primaryTypographyProps={{ color: 'white', className: nunitoSans.className }}
                />
              </ListItem>
              {/* Email */}
              <ListItem>
                <ListItemIcon>
                  <EmailIcon sx={{ color: 'skyblue' }} />
                </ListItemIcon>
                <ListItemText
                  primary="gopigollamandala9999@gmail.com"
                  primaryTypographyProps={{ color: 'white', className: nunitoSans.className }}
                />
              </ListItem>
            </List>
          </Stack>
        </Box>

        <Box width={{ xs: '100%', md: '55%' }}>
          <Card sx={{ p: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
              Get in Touch
            </Typography>
            <Box
              component="form"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
              }}
            >
              <TextField label="Name" variant="outlined" fullWidth />
              <TextField label="Email" variant="outlined" fullWidth />
              <TextField label="Message" variant="outlined" fullWidth multiline rows={4} />
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
            </Box>
          </Card>
        </Box>
      </Stack>
    </Container>
  );
};

export default ContactUs;
