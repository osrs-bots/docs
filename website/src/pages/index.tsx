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
        mt={'30px'}
        fontSize={48}
        fontWeight={700}>
        OSRS Bots 🪄
      </Typography>
      <Typography
        mt={'5px'}
        pl={'5px'}
        fontSize={24}
        fontWeight={500}>
        Automate Old School Runescape Tasks
      </Typography>
      <Box
        pl={'5px'}
        mt={'32px'}>
        <Button variant='outlined' size='large'>
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
          pt='7%'
        >
          <Box
            textAlign={'center'}>
              <Box
                component={'img'}
                alt={'osrs bots logo'}
                width={'50%'}
                src={useBaseUrl('/img/osrs-bots-logo.jpg')}
              />
              <HomepageMessage />
          </Box>
        </Box>
      </main>
    </Layout>
  );
}