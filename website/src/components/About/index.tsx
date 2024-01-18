
import { Box, Typography } from '@mui/material';
import React from 'react';

export default function About(): JSX.Element {

  return (
    <Box
      className={'site-container'}
      mt={'115px'}>
        <Typography
          id='about'
          className={'site-section-title'}>
          About
        </Typography>
        <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
    </Box>
  );
}
