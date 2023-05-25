import React from 'react'
import { Typography, useTheme } from '@mui/material';
const Dashboard = () => {
    const theme = useTheme();
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
