
import React from 'react';
import { useMediaQuery } from 'react-responsive'
import {
  Box,
} from '@mui/material';
import Layout from '@theme/Layout';
import About from '../components/About';
import AppHero from '../components/AppHero';
import Disclaimer from '../components/Disclaimer';
import PriceListDesktop from '../components/PriceListDesktop';
import PriceListMobile from '../components/PriceListMobile';
import PriceListTablet from '../components/PriceListTablet';
import Faqs from '../components/Faqs';
import Connect from '../components/Connect';
import { MuiThemeWrapper } from '../components/MuiThemeWrapper.tsx';

export default function Home(): JSX.Element {
  const isMobile = useMediaQuery({ maxWidth: 500 })
  const isTablet = useMediaQuery({ minWidth: 500, maxWidth: 1200 })

  return (
    <Layout>
      <MuiThemeWrapper>
        <main>
          <Box
            className={'site-home-container'}
            pb={'100px'}
          >
            <AppHero/>
            {isMobile && 
              <PriceListMobile />
            }
            {isTablet &&
              <PriceListTablet/>
            }
            {!isTablet && !isMobile &&
              <PriceListDesktop/>
            }
            <About />
            <Disclaimer/>
            <Faqs/>
            <Connect/>
          </Box>
        </main>
      </MuiThemeWrapper>
    </Layout>
  );
}