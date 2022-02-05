import React from "react";
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';


export const Copyright = () => {
    return (
        <Typography variant="body2" color="text.secondary" align="center" position="absolute" bottom="0" >
        {/* position="absolute" bottom="0" left="50%" marginBottom="10px" */}
            {'Developed by '}
            <Link color="inherit" href="https:/">
                KAYTO
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
};