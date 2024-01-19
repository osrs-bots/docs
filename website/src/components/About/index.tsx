
import useBaseUrl from '@docusaurus/useBaseUrl';
import { Box, Paper, Typography } from '@mui/material';
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
        <Paper
          width={'100%'}
          elevation={1}
          component={'img'}
          alt={'osrs bots logo'}
          src={useBaseUrl('/img/guthix_rest_maker_demo.gif')}
          />
        <Typography mt={'25px'}>
        Do you love playing Old School Runescape, but hate wasting time on boring and tedious tasks? Do you wish you could level up faster, make more gold, and enjoy the game more? If you answered yes, then you need osrs bots!
        </Typography>
        <Typography mt={'25px'}>
            Unlike client based bots, pixel determinate bots are more stealthy and less likely to be detected by anti-cheat systems. To use this software, you need to install python and pip, and be able to run commands in the terminal.
        </Typography>
    </Box>
  );
}
