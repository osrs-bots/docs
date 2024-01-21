import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Box, Typography } from '@mui/material';

export default function Disclaimer(): JSX.Element {
  const isMobile = useMediaQuery({ maxWidth: 500 })
  return (
    <Box
      className={'site-container'}
      mt={'85px'}>
        {isMobile ?
          <Typography
            className={'site-section-title'}>
            Legal
          </Typography>
        :
          <Typography
            className={'site-section-title'}>
            Disclaimer
          </Typography>
        }
        <Typography>
          Using this software is at your own discretion and risk. Misuse of them may lead to a ban or loss of your old school runescape account. I cannot be held accountable for any misuse or consequences arising from the utilization of this code. This software shouldn't be used while playing on official Old School Runescape servers.
        </Typography>
    </Box>
  );
}
