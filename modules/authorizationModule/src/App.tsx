import React from 'react';
import { Typography } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles<Theme>((theme: Theme) => ({
   colorText: {
       color: theme.palette.primary.main
   }
}));

const App = () => {
    const classes = useStyles();

    return (
        <div>
            <Typography classes={{ root: classes.colorText }}>Auth Module</Typography>
        </div>
    )
};

export default App