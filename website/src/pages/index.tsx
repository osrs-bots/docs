import Layout from '@theme/Layout';
import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { 
  Box,
  Button,
  Typography
} from '@mui/material';

function HomepageMessage() {
  return (
    <Box
      width={'50%'}
      ml={'25%'}
      textAlign={'left'}
    >
      <Typography
        className='site-title'
        mt={'30px'}
        fontWeight={700}>
        OSRS Bots 🪄
      </Typography>
      <Typography
        className='site-tag-line'
        fontWeight={500}>
        Automate Old School Runescape Tasks
      </Typography>
      <Box
        className='site-learn-more-button'
        mt={'32px'}
        mb={'20px'}>
        <Button variant='outlined'>
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
        <Box
          height='calc(100vh - 153px)'
          pt='3%'
        >
          <Box
            textAlign={'center'}>
              <Box
                component={'img'}
                alt={'osrs bots logo'}
                width={'50%'}
                borderRadius={'1%'}
                src={useBaseUrl('/img/osrs-bots-logo.jpg')}
              />
              <HomepageMessage />
          </Box>
        </Box>
      </main>
    </Layout>
  );
}