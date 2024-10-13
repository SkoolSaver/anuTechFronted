import { popins } from '@/app/google-fonts/fonts';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import { Box, Button, Container, Divider, Stack, Typography } from '@mui/material';
import Image from 'next/legacy/image';

const LandingPage = ({ heroSectionContent, imgPath }) => {
  return (
    <Box
      bgcolor='#020204'
      color='white'
      sx={{
        overflow: 'hidden',
      }}
      pb={8}
    >
      <Box className='grid'></Box>
      <Container
        maxWidth='lg'
        sx={{
          pt: 10,
          pb: 10,
        }}
      >
        <Stack direction='row' justifyContent='space-between' alignItems='center'>
          <Box width='40%' display='flex' flexDirection='column' gap={4}>
            <Typography fontSize={40} fontWeight={600} variant='h2' className={popins.className}>
              {heroSectionContent.header}
            </Typography>

            <Divider sx={{ height: 5, width: '50%', backgroundColor: 'green' }} />
            <Typography variant='body1'>{heroSectionContent.content}</Typography>

            <Stack direction='row' spacing={2}>
              {heroSectionContent.readMore && (
                <Button
                  startIcon={<PlayArrowIcon />}
                  variant='contained'
                  size='small'
                  sx={{
                    bgcolor: 'white',
                    color: 'black',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      bgcolor: '#AE92EC',
                      color: 'white',
                      transform: 'scale(1.1)',
                    },
                  }}
                >
                  Read More
                </Button>
              )}

              <Button variant='outlined' size='large' color='secondary'>
                Get a Quote
              </Button>
            </Stack>
          </Box>
          <Box width='50%' sx={{ background: '#0000003d', zIndex: 10 }}>
            <Image objectFit='contain' width={615} height={520} layout='responsive' src={imgPath} alt='dashboard' />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default LandingPage;
