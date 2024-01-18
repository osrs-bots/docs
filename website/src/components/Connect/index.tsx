
import { Box, Typography } from '@mui/material';
import { useColorMode } from '@docusaurus/theme-common';
import React from 'react';

export default function Connect(): JSX.Element {
  const { isDarkTheme } = useColorMode();
  return (
    <Box
      width={'60%'}
      ml={'20%'}
      mt={'125px'}>
        <Typography
          fontSize={'45px'}
          fontWeight={700}
          mb={'25px'}>
          Connect
        </Typography>
        <Box component={'span'}>
          <img
            className='connect-icon' 
            height='28px'
            width='28px'
            src='img/icons/x-light-theme.svg'/>
          <img
            className='connect-icon' 
            height='28px'
            width='28px'
            src='img/icons/github-light-theme.svg'/>
          <img
            className='connect-icon' 
            height='28px'
            width='28px'
            src='img/icons/discord-light-theme.svg'/>
          <img
            className='connect-icon' 
            height='28px'
            width='28px'
            src='img/icons/instagram-light-theme.svg'/>
          <img
            className='connect-icon' 
            height='28px'
            width='28px'
            src='img/icons/reddit-light-theme.svg'/>
          <img
            className='connect-icon' 
            height='28px'
            width='28px'
            src='img/icons/facebook-light-theme.svg'/>
        </Box>
    </Box>
  );
}
