import { createMuiTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

export const baseTheme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '*::-webkit-scrollbar': {
          width: 8,
          height: 8,
        },
        '*::-webkit-scrollbar-thumb': {
          background: grey[400],
          borderRadius: 8,
        },
        '*::-webkit-scrollbar-track': {
          background: grey[300],
        },
      },
    },
  },
});
