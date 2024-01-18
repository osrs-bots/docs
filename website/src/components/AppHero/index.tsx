
import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { 
  Box,
  Button,
  Link,
  Typography
} from '@mui/material';
export default function AppHero(): JSX.Element {

  function HomepageMessage() {
    return (
      <Box
        className='site-container'
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
            onClick={()=> {
              const ele = document.getElementById('about')
              ele.scrollIntoView({ behavior: 'smooth', })
            }}>
              Learn More
          </Button>
        </Box>
      </Box>
    );
  }

  return (
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
  );
}
