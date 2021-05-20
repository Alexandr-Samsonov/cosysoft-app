import React, { PropsWithChildren } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { baseTheme } from './baseTheme';

export default function ThemeProvider({ children }: PropsWithChildren<{}>) {
  return (
    <MuiThemeProvider theme={baseTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}
