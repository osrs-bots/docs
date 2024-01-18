import Layout from '@theme/Layout';
import React from 'react';
import {
  Box,
} from '@mui/material';
import About from '../components/About';
import AppHero from '../components/AppHero';
import Disclaimer from '../components/Disclaimer';
import PriceListDesktop from '../components/PriceListDesktop';
import PriceListMobile from '../components/PriceListMobile';
import Faqs from '../components/Faqs';
import Connect from '../components/Connect';
import Donate from '../components/Donation';

export default function Home(): JSX.Element {
  return (
    <Layout>
      <main>
        <Box
          className={'site-home-container'}
          pb={'350px'}
        >
          <AppHero/>
          <PriceListDesktop/>
          <About />
          <Disclaimer/>
          <Faqs/>
          <Connect/>
        </Box>
      </main>
    </Layout>
  );
}