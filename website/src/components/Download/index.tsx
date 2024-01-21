import React from 'react';
import { Box, Button, Card, CardActions, CardContent, Stack, Typography } from '@mui/material';
import { useMediaQuery } from 'react-responsive'

export default function Download(): JSX.Element {
  const isMobile = useMediaQuery({ maxWidth: 900 })

  return (
    <Box
      className={'site-container'}
      mt={'35px'}>
        <Box
          className={'site-downloads-container'}
          width={'max-content'}>
          <Card>
            <CardContent>
              <Stack
                spacing={2} 
                direction="row" 
                alignItems="center">
                <img
                    className='connect-icon' 
                    height='28px'
                    width='28px'
                    src={`img/icons/windows-color-theme.svg`}/>
                <Typography 
                  noWrap>
                    Windows 10 64-bit
                  </Typography>
              </Stack>
            </CardContent>
              <Box textAlign={'center'}>
                <CardActions>
                    <Button
                      href='https://github.com/osrs-bots/osrs-python-bot-runner/releases/download/0.1.0/osrs-bots-runner-Windows-amd64.exe'
                      size="large" 
                      fullWidth>
                        Install
                    </Button>
                </CardActions>
              </Box>
          </Card>
        </Box>
    </Box>
  );
}
