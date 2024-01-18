
import { Box, Typography } from '@mui/material';
import React from 'react';

export default function Faqs(): JSX.Element {
  return (
    <Box
      width={'60%'}
      ml={'20%'}
      mt={'125px'}>
        
        <Typography
          fontSize={'45px'}
          fontWeight={700}
          mb={'25px'}>
          Frequent Questions
        </Typography>
        <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
    </Box>
  );
}