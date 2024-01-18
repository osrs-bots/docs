
import { Box, Typography } from '@mui/material';
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
          If you are looking for a way to play Old School Runescape without spending hours on repetitive tasks, you might be interested in osrs bots. This old school runescape bot uses pixels to automate tasks. Unlike client based bots, pixel determinate bots are more stealthy and less likely to be detected by anti-cheat systems. To use this software, you need to install python and pip, and be able to run commands in the terminal.
        </Typography>
        <Typography mt={'25px'}>
          <a target='_blank' href='https://github.com/osrs-bots/osrs-python-bot?tab=readme-ov-file#setup-guide'>
            Get Started
          </a>
        </Typography>
    </Box>
  );
}
