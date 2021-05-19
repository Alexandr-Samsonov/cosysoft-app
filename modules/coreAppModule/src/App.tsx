import React, { StrictMode, Suspense } from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core';

// @ts-ignore
const ThemeProvider = React.lazy(() => import('uiDesignModule/uiDesignTheme'));
// @ts-ignore
const Button = React.lazy(() => import('uiDesignModule/uiDesignElements/Button'));
// @ts-ignore
const Auth = React.lazy(() => import('authorizationModule/Auth'));

export const useStyles = makeStyles<Theme>((theme: Theme) => ({
    colorText: {
        color: theme.palette.primary.main
    }
}));

export const App = () => {
    const classes = useStyles();

    return (
        <StrictMode>
                <Suspense fallback="Loading...">
                    <ThemeProvider>
                        <Typography classes={{ root: classes.colorText }}>Core App Module</Typography>
                        <Auth />
                        <Button />
                    </ThemeProvider>
                </Suspense>
        </StrictMode>
    )}
