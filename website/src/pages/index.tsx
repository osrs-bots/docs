
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
import Head from '@docusaurus/Head';
import Download from '../components/Download';

const googleAnalytics = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments)}
        gtag('js', new Date());
        gtag('config', 'G-G17V0J27LX');`

export default function Home(): JSX.Element {
  const isMobile = useMediaQuery({ maxWidth: 500 })
  const isTablet = useMediaQuery({ minWidth: 500, maxWidth: 1200 })

  return (
    <Layout>
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-G17V0J27LX"></script>
        <script>
          {googleAnalytics}
        </script>
      </Head>
      <MuiThemeWrapper>
        <main>
          <Box
            className={'site-home-container'}
            pb={'100px'}
          >
            <AppHero/>
            <About />
            <Download />
            {isMobile && 
              <PriceListMobile />
            }
            {isTablet &&
              <PriceListTablet/>
            }
            {!isTablet && !isMobile &&
              <PriceListDesktop/>
            }
            <Disclaimer/>
            <Faqs/>
            <Connect/>
          </Box>
        </main>
      </MuiThemeWrapper>
    </Layout>
  );
}