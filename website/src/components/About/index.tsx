
import { Box, Link, Typography } from '@mui/material';
import React from 'react';

export default function About(): JSX.Element {

  return (
    <Box
      className={'site-container'}
      mt={'85px'}>
        <Typography
          id='about'
          className={'site-section-title'}>
          About
        </Typography>
        <Typography>
          If you are looking for a way to play Old School Runescape without spending hours on repetitive tasks, you might be interested in osrs bots. This old school runescape bot uses pixels to automate tasks. 
        </Typography>
        <Typography mt={'25px'}>
          <Link href='https://github.com/osrs-bots/osrs-python-bot?tab=readme-ov-file#setup-guide'>
            Get Started
          </Link>
        </Typography>
    </Box>
  );
}
