
import { Box, Typography } from '@mui/material';
import { useColorMode } from '@docusaurus/theme-common';
import React from 'react';

export default function Connect(): JSX.Element {
  const { isDarkTheme } = useColorMode();
  const mode = isDarkTheme ? 'dark' : 'light'
  return (
    <Box
      className={'site-container'}
      mt={'85px'}>
        <Typography
          className={'site-section-title'}>
          Connect
        </Typography>
        <Box
          textAlign={'center'}
          className={'site-connect-icons'}
          component={'span'}>
          <img
            className='connect-icon' 
            height='28px'
            width='28px'
            src={`img/icons/x-${mode}-theme.svg`}/>
          <img
            className='connect-icon' 
            height='28px'
            width='28px'
            src={`img/icons/github-${mode}-theme.svg`}/>
          <img
            className='connect-icon' 
            height='28px'
            width='28px'
            src={`img/icons/discord-${mode}-theme.svg`}/>
          <img
            className='connect-icon' 
            height='28px'
            width='28px'
            src={`img/icons/instagram-${mode}-theme.svg`}/>
          <img
            className='connect-icon' 
            height='28px'
            width='28px'
            src={`img/icons/reddit-${mode}-theme.svg`}/>
          <img
            className='connect-icon' 
            height='28px'
            width='28px'
            src={`img/icons/facebook-${mode}-theme.svg`}/>
        </Box>
    </Box>
  );
}
