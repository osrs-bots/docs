
import React from 'react';
import PropTypes  from 'prop-types';
import {
  Box,
  Button,
  Card,
  CardActions,
  Grid, Paper, Stack, Typography
} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import { jsx } from '@emotion/react';

function ListPerks(list): JSX.Element[] {
  return list.map((perk) => {
    return <Perk perk={perk}/>
  })
}

function Perk({perk}): JSX.Element {
  return (
    <Box ml={'15%'}>
      <Typography noWrap>
        ✅ {perk}
      </Typography>
    </Box>
  )
}

const TierCard = ({ name, icon, price, features, hex }): JSX.Element => {
  return (
    <Card sx={{
      height: '100%'
    }}>
      <Stack
        flexDirection={'column'}
        display={'flex'}
        p={'15px'}>
        <Box>
          <img src={icon}/>
        </Box>
        <Typography
          color={hex}>
          {name}
        </Typography>
        <Box>
          <Typography component='div'>
            {name === 'Bronze' &&
              <>Free</>
            }
            {name === 'Silver' &&
              <>Sign up</>
            }
            {name === 'Gold' &&
              <>
                <Box fontWeight={700} display='inline'>$2.99</Box> 
                &nbsp;USD
              </>
            }
          </Typography>
          {/*  */}
          <Stack>
            {name === 'Bronze' &&
              <Typography>
                -------------------
              </Typography>
            }
            {name === 'Silver' &&
              <Typography>
                -------------------
              </Typography>
            }
            {name === 'Gold' &&
              <Typography>
                per key / month
              </Typography>
            }
          </Stack>
        </Box>
      </Stack>
      <CardActions 
        sx={{
          width: '100%'
        }} >
        <Box>
          {name === 'Silver' && 
            <Button 
              disabled
              variant='outlined'
              endIcon={<LockIcon/>}>
              Register
            </Button>
          }
          {name === 'Gold' && 
            <Button 
              disabled
              variant='outlined'
              endIcon={<LockIcon/>}>
              Coming Soon
            </Button>
          }
        </Box>
      </CardActions>
    </Card>
  )
}

TierCard.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.string,
  isLocked: PropTypes.bool,
  features: PropTypes.arrayOf(PropTypes.string),
  price: PropTypes.string,
  needsRegistration: PropTypes.bool,
  hex: PropTypes.string
}

export default function PriceListTablet(): JSX.Element {
  const bronze = {
    name: 'Bronze',
    icon: 'img/crown-bronze.svg',
    isLocked: false,
    features:  ['High Alchemy', 'Nightmare Zone'],
    price: 'Free',
    needsRegistration: false,
    hex: '#967545'

  }

  const silver = {
    name: 'Silver',
    icon: 'img/crown-silver.svg',
    isLocked: true,
    features: ['All Simple Bots', 'Discord Channel', 'VIP Newsletter'],
    price: 'Free',
    needsRegistration: true,
    hex: '#c0c0c0'
  }

  const gold = {
    name: 'Gold',
    icon: 'img/crown-gold.svg',
    isLocked: true,
    features: ['Future AI Bots', 'Dedicated Support', 'Bot Key'],
    price: '$2.99',
    needsRegistration: true,
    hex: '#ffd700'
  }

  const tiers = [bronze, silver, gold]

  return (
    <Box 
      className='site-container'
      mt={'115px'}>
        <Typography
          className={'site-section-title'}>
            Membership
        </Typography>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={2}>
          {tiers.map(({name, icon, isLocked, features, price, needsRegistration, hex}) => (
            <Grid key={name} item md={4}>
              <TierCard 
                name={name}
                icon={icon}
                isLocked={isLocked}
                features={features}
                price={price}
                needsRegistration={needsRegistration}
                hex={hex}/>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  )
}
