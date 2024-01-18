
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
import Faqs from '../components/Faqs';
import Connect from '../components/Connect';
import Donate from '../components/Donation';

export default function Home(): JSX.Element {
  const isMobile = useMediaQuery({ maxWidth: 902 })
  return (
    <Layout>
      <main>
        <Box
          className={'site-home-container'}
          pb={'350px'}
        >
          <AppHero/>
          {isMobile &&
            <PriceListMobile/>
          }
          {!isMobile &&
            <PriceListDesktop/>
          }
          <About />
          <Disclaimer/>
          <Faqs/>
          <Connect/>
        </Box>
      </main>
    </Layout>
  );
}