import React from "react";
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';


export const Copyright = () => {
    return (
        <Typography variant="body2" color="text.secondary" align="center" position="relative" margin="20px 0px" bottom="0" >
            {'Developed by '}
            <Link color="inherit" href="https:/">
                KAYTO
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
};