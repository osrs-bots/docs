import Layout from '@theme/Layout';
import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { 
  Box,
  Button,
  Grid,
  Typography
} from '@mui/material';

function HomepageMessage() {
  return (
    <Box
      sx={{
        height: '350px', // need to match this hegith to the class to match image
      }}
    >
      <Typography
        mt={2}
        fontSize={45}
        fontWeight='700'>
        OSRS Bots 🪄
      </Typography>
      <Typography
        mt={3}
        fontSize={20}
        fontWeight='500'>
        Automate Old School Runescape Tasks
      </Typography>
      <Box
        mt={5}>
        <Button variant='contained'>
          Learn More
        </Button>
      </Box>
    </Box>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout>
      <main>
        <Grid 
          container
          direction="row"
          height='calc(100vh - 153px)'
          pt='280px'
        >
          <Grid 
            item 
            md={5}
            textAlign='right'>
              <Box
                component='img'
                alt='osrs bots logo'
                className='homepage-osrs-bots-logo'
                src={useBaseUrl('/img/osrs-bots-logo.jpg')}
              />
          </Grid>
          <Grid 
            item 
            md={7}
            pl='75px'>
              <HomepageMessage />
          </Grid>
        </Grid>
      </main>
    </Layout>
  );
}
