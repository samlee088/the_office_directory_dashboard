import React from 'react'
import { Typography, useTheme } from '@mui/material';
import { startIdleScreenSaver } from "components/DVDScreenSaver.js";
import { useLocation } from 'react-router-dom';

const Dashboard = () => {
    const theme = useTheme();
    const location = useLocation();

    if (location.pathname === '/dashboard') {
        startIdleScreenSaver();
    }


    return (
        <Typography
        p="0 0.6rem"
        fontSize="0.8rem"
        sx={{ color: theme.palette.secondary[200] }}
    >
        Welcome to the office fan page

        
        
    </Typography>

    
    )
}

export default Dashboard
