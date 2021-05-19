import { createMuiTheme } from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/pink';

export const baseTheme = createMuiTheme({
    palette: {
        primary: {
            main: pink[50]
        }
    },
    overrides: {
        MuiTypography: {
            colorTextPrimary: {
                color: 'red'
            },
        }
    }
})