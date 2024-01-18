import Layout from '@theme/Layout';
import React from 'react';
import {
  Box,
} from '@mui/material';
import About from '../components/About';
import AppHero from '../components/AppHero';
import Disclaimer from '../components/Disclaimer';
import PriceList from '../components/PriceListDesktop';
import Faqs from '../components/Faqs';
import Connect from '../components/Connect';

export default function Home(): JSX.Element {
  return (
    <Layout>
      <main>
        <Box
          className={'site-home-container'}
          pb={'350px'}
        >
          <AppHero/>
          <PriceList/>
          <About />
          <Disclaimer/>
          <Faqs/>
          <Connect/>
        </Box>
      </main>
    </Layout>
  );
}