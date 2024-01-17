import Layout from '@theme/Layout';
import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { 
  Box,
  Button,
  Link,
  Typography
} from '@mui/material';

function HomepageMessage() {
  return (
    <Box
      className='site-container'
      textAlign={'left'}
    >
      <Typography
        className='site-title'
        mt={'15px'}>
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
        <Button 
          component={Link}
          target='_blank'
          variant='outlined' 
          href='https://github.com/osrs-bots/osrs-python-bot?tab=readme-ov-file#osrs-python-bot'>
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
          className={'site-home-container'}
        >
          <Box
            textAlign={'center'}>
              <Box
                className={'site-logo'}
                component={'img'}
                alt={'osrs bots logo'}
                src={useBaseUrl('/img/osrs-bots-logo.jpg')}
              />
              <HomepageMessage />
          </Box>
        </Box>
      </main>
    </Layout>
  );
}