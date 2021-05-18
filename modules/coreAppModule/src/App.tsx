import React, { StrictMode, Suspense, lazy } from 'react';

// @ts-ignore
const ThemeProvider = lazy(() => import('uiDesignModule/theme'));
// @ts-ignore
const { Button } = lazy(() => import('uiDesignModule/elements'));

export const App = () => (
        <StrictMode>
            <h1>TTTT</h1>
            {/*<ThemeProvider>*/}
                <Suspense fallback="Loading...">
                    <div>App</div>
                    <Button />
                </Suspense>
            {/*</ThemeProvider>*/}
        </StrictMode>
    )
