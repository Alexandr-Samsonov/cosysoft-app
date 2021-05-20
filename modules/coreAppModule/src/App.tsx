import React, { StrictMode, Suspense } from 'react';
import { Typography } from '@material-ui/core';

const Auth = React.lazy(() => import('authorizationModule/Auth'));
import { Button, ThemeProvider } from 'uiDesignModule/core'


export const App = () => (
        <StrictMode>
                <Suspense fallback="Loading...">
                    <ThemeProvider>
                        <Typography color="primary">Core App Module</Typography>
                        <Auth />
                        <Button>UI Design Module</Button>
                    </ThemeProvider>
                </Suspense>
        </StrictMode>
    )
