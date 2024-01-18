import React from 'react';
import { Box, Button, Card, Stack, Typography } from '@mui/material';
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
        className='site-container'>
        <Typography
            className={'site-section-title'}>
            Subscribe
        </Typography>
          <Stack textAlign={'center'}>
            {/* BRONZE */}
            <Card sx={{ marginBottom: '25px' }} elevation={3}>
              <Stack
                p={'15px'}>
                <Box>
                  <img src='img/crown-bronze.svg'/>
                </Box>
                <Typography
                  color={'#967545'}>
                  Bronze
                </Typography>
                {/* BRONZE PRICING */}
                <Box
                  mt={'10px'}
                  mb={'5px'}>
                  <Typography>
                    FREE
                  </Typography>
                  <Typography>
                      -------------
                  </Typography>
                </Box>
                {/* BRONZE PERKS */}
                <ListBronzePerks />
                <Box
                  mt={'10px'}
                  mb={'5px'}>
                  <Button variant='outlined'>
                    Get Started
                  </Button>
                </Box>
              </Stack>
            </Card>

            {/* SILVER */}
            <Card sx={{ marginBottom: '25px' }} elevation={3}>
              <Stack
                mt={'25px'}
                p={'15px'}>
                <Box>
                  <img src='img/crown-silver.svg'/>
                </Box>
                <Typography
                  color={'#c0c0c0'}>
                  Bronze
                </Typography>
                {/* SILVER PRICING */}
                <Box
                  mt={'10px'}
                  mb={'5px'}>
                  <Typography>
                    FREE
                  </Typography>
                  <Typography>
                    Request Trial
                  </Typography>
                </Box>
                {/* SILVER PERKS */}
                <ListSilverPerks />
                <Box
                  mt={'10px'}
                  mb={'5px'}>
                  <Button 
                    disabled 
                    variant='outlined' 
                    endIcon={<LockIcon/>}>
                    Locked
                  </Button>
                </Box>
              </Stack>
            </Card>

            {/* GOLD */}
            <Card sx={{ marginBottom: '25px' }} elevation={3}>
              <Stack
                mt={'25px'}
                p={'15px'}>
                <Box>
                  <img src='img/crown-gold.svg'/>
                </Box>
                <Typography
                  color={'#ffd700'}>
                  Gold
                </Typography>
                {/* GOLD PRICING */}
                <Box>
                  <Typography component='div'>
                    <Box fontWeight={700} display='inline'>$2.99</Box> 
                    &nbsp;USD
                  </Typography>

                  <Typography>
                    Per key / month
                  </Typography>
                </Box>
                {/* GOLD PERKS */}
                <ListGoldPerks />
                <Box
                  mt={'10px'}
                  mb={'5px'}>
                  <Button 
                    disabled 
                    variant='outlined' 
                      endIcon={<LockIcon/>}>
                    Locked
                  </Button>
                </Box>
              </Stack>
            </Card>
        </Stack>
    </Box>
  );
}
