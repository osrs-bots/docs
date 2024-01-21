import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { useColorMode } from '@docusaurus/theme-common';

const theme = createTheme({
  palette: {
    mode: 'light',
  }
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  }
});

export function MuiThemeWrapper({ children }) {
  const isDarkTheme = useColorMode().colorMode === 'dark';
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : theme}>
      {children}
    </ThemeProvider>
  )
}