import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { useColorMode } from '@docusaurus/theme-common';

const theme = createTheme({});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  }
});

export function MuiThemeWrapper({ children }) {
  const { isDarkTheme } = useColorMode();
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : theme}>
      {children}
    </ThemeProvider>
  )
}