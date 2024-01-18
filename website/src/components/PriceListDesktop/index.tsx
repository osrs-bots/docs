
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
      ✅ {perk}
    </Box>
  )
}
export default function PriceListDesktop(): JSX.Element {
  return (
    <Box
      className={'site-container'}
      mt={'6%'}
      mb={'55px'}>
      <Typography
          className={'site-section-title'}>
          Subscribe
      </Typography>
      <Grid
        textAlign={'center'}
        border={'1px solid black'}
        borderRadius={'5px'}
        container>
          {/* BRONZE */}
        <Grid 
          item
          md={4}
          pt={'12px'}>
            <Stack pt={'10px'} pb={'10px'}>
              {/* BRONZE CROWN INFO */}
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
              {/* BRONZE ACTION BUTTON */}
              <Box
                mb={'10px'}
                pt={'15px'}
                pb={'25px'}
                borderBottom={'1px solid black'}>
                <Button variant='outlined'>
                  Get Started
                </Button>
              </Box>
              {/* BRONZE PERKS LIST */}
              <Stack
                mt={'15px'}
                pl={'8%'}
                mb={'10px'}
                textAlign={'left'}>
                <ListBronzePerks/>
              </Stack>
            </Stack>
        </Grid>
        {/* SILVER */}
        <Grid 
          item 
          md={4}
          pt={'12px'} 
          borderLeft={'1px solid black'}
          borderRight={'1px solid black'}>
            {/* SILVER CROWN INFO */}
            <Stack pt={'10px'} pb={'10px'}>
              <Box>
                <img src='img/crown-silver.svg'/>
                <Typography
                  color={'#c0c0c0'}>
                  Silver
                </Typography>
              </Box>
              {/* SILVER GROWN PRICING */}
              <Box>
                <Typography>
                  FREE
                </Typography>
                <Typography>
                  Request Trial
                </Typography>
              </Box>
              {/* SILVER ACTION BUTTON */}
              <Box
                mb={'10px'}
                pt={'15px'}
                pb={'25px'}
                borderBottom={'1px solid black'}>
                <Button 
                  disabled 
                  variant='outlined'
                  endIcon={<LockIcon/>}>
                  Locked
                </Button>
              </Box>
              {/* SILVER PERK LIST */}
              <Stack
                mt={'15px'}
                pl={'8%'}
                mb={'10px'}
                textAlign={'left'}>
              <ListSilverPerks/>
              </Stack> 
            </Stack>
        </Grid>
        {/* GOLD */}
        <Grid 
          item 
          md={4}
          pt={'12px'}>
            {/* GOLD CROWN INFO */}
            <Stack pt={'10px'} pb={'10px'}>
              <Box>
                <img src='img/crown-gold.svg'/>
                <Typography
                  color={'#ffd700'}>
                  Gold
                </Typography>
              </Box>
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
              {/* GOLD ACTION BUTTON */}
              <Box
                mb={'10px'}
                pt={'15px'}
                pb={'25px'}
                borderBottom={'1px solid black'}>
                <Button 
                  disabled 
                  variant='outlined'
                  endIcon={<LockIcon/>}>
                  Locked
                </Button>
              </Box>
              {/* GOLD PERKS LIST */}
              <Stack
                mt={'15px'}
                pl={'8%'}
                mb={'10px'}
                textAlign={'left'}>
                <ListGoldPerks/>
              </Stack>
            </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}