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
        This is going to be the main page for the office
    </Typography>
    )
}

export default Dashboard
