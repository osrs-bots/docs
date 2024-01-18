
import React from 'react';
import {
  Box,
  Button,
  Grid, Stack, Typography
} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';

function ListBronzePerks(): JSX.Element[] {
  const list = ['High Alchemy', 'Nightmare Zone']
  return ListPerks(list)
}

function ListSilverPerks(): JSX.Element[] {
  const list = ['All Simple Bots', 'Discord Channel', 'VIP Newsletter']
  return ListPerks(list)
}

function ListGoldPerks(): JSX.Element[] {
  const list = ['Future AI Bots', 'Dedicated Support', 'Bot Key']
  return ListPerks(list)
}

function ListPerks(list): JSX.Element[] {
  return list.map((perk) => {
    return <Perk perk={perk}/>
  })
}

function Perk({perk}): JSX.Element {
  return (
    <Box>
      <Typography noWrap>
        ✅ {perk}
      </Typography>
    </Box>
  )
}
export default function PriceListMobile(): JSX.Element {
  return (
    <Box 
      className={'site-container'}
      mt={'6%'}
      mb={'6%'}>
      <Typography
          fontSize={'45px'}
          fontWeight={700}
          mb={'40px'}>
          Subscribe
      </Typography>
      <Grid
        textAlign={'center'}
        border={'1px solid black'}
        borderRadius={'5px'}
        container>
          <Grid container item xs={6} sm={4} >
            <Stack
              p={'15px'}
              borderRight={'1px solid black'}>
              <Box>
                <img src='img/crown-bronze.svg'/>
              </Box>
              <Typography
                color={'#967545'}>
                Bronze
              </Typography>
              {/* BRONZE GROWN PRICING */}
              <Box>
                <Typography>
                  FREE
                </Typography>
                <Typography>
                  -------------
                </Typography>
              </Box>
              <Box
                mb={'10px'}
                pt={'5px'}
                pb={'5px'}>
                <Button variant='outlined'>
                  Get Started
                </Button>
              </Box>
            </Stack>
            {/* BRONZE ACTION BUTTON */}
          </Grid>
          <Grid container item xs={6} sm={8} textAlign={'center'}>
              <Stack
                textAlign={'left'} pt={'15%'}
                >
                <ListBronzePerks/>
              </Stack>
          </Grid>
          <Grid container item xs={6} sm={4}
              borderBottom={'1px soild black'}>
            <Stack
              p={'15px'}
              borderRight={'1px solid black'}>
              <Box>
                <img src='img/crown-silver.svg'/>
              </Box>
              <Typography
                color={'#c0c0c0'}>
                Bronze
              </Typography>
              {/* SILVER GROWN PRICING */}
              <Box>
                <Typography>
                  FREE
                </Typography>
                <Typography>
                  Request Trial
                </Typography>
              </Box>
              <Box
                mb={'10px'}
                pt={'5px'}
                pb={'5px'}>
                <Button variant='outlined'>
                  Get Started
                </Button>
              </Box>
            </Stack>
            {/* SILVER ACTION BUTTON */}
          </Grid>
          <Grid 
            container 
            item 
            xs={6} 
            sm={8}
            textAlign={'center'}>
              <Stack
                textAlign={'left'} pt={'15%'}
                >
                <ListSilverPerks/>
              </Stack>
          </Grid>
          <Grid container item xs={6} sm={4}>
            <Stack
              p={'15px'}
              borderRight={'1px solid black'}>
              <Box>
                <img src='img/crown-gold.svg'/>
              </Box>
              <Typography
                color={'#ffd700'}>
                Gold
              </Typography>
              {/* GOLD GROWN PRICING */}
              <Box>
                <Typography component='div'>
                  <Box fontWeight={700} display='inline'>$2.99</Box> 
                  &nbsp;USD
                </Typography>

                <Typography>
                  Per key / month
                </Typography>
              </Box>
              <Box
                mb={'10px'}
                pt={'5px'}
                pb={'5px'}>
                <Button variant='outlined'>
                  Get Started
                </Button>
              </Box>
            </Stack>
            {/* BRONZE ACTION BUTTON */}
          </Grid>
          <Grid container item xs={6} sm={8}  textAlign={'center'}>
              <Stack
                textAlign={'left'} pt={'15%'}
                >
                <ListGoldPerks/>
              </Stack>
          </Grid>
      </Grid>
    </Box>
  );
}
