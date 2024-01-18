
import { Box, Typography } from '@mui/material';
import React from 'react';

export default function Disclaimer(): JSX.Element {
  return (
    <Box
      className={'site-container'}
      mt={'115px'}>
        <Typography
          fontSize={'45px'}
          fontWeight={700}
          mb={'25px'}>
          Disclaimer
        </Typography>
        <Typography>
          Using these scripts is solely at your own discretion and risk. Employing them may lead to a ban or loss of your old school runescape account. I cannot be held accountable for any misuse or consequences arising from the utilization of this code.
        </Typography>
    </Box>
  );
}
