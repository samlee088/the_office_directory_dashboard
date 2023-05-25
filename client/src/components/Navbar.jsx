import React, { useState } from 'react'
import { 
    LightModeOutlined, 
    DarkModeOutlined, 
    Menu as MenuIcon, 
    Search, 
    SettingsOutlined, 
    ArrowDropDownOutlined 
} from '@mui/icons-material'
import FlexBetween from 'components/FlexBetween'
import { useDispatch } from 'react-redux';
import { setMode } from 'state';
import {
    AppBar,
    Button,
    Box,
    Typography,
    IconButton,
    InputBase,
    Toolbar,
    Menu,
    MenuItem,
    useTheme,
} from "@mui/material";



const Navbar = ({
    user,
    isSidebarOpen,
    setIsSidebarOpen,
}) => {
    const dispatch = useDispatch();
    const theme = useTheme();

    const [anchorEl, setAnchorEl] = useState(null);
    const isOpen = Boolean(anchorEl);
    const handleClick = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null)


  return (
    <AppBar
        sx={{
            position: 'static',
            background: 'none',
            boxShadow: 'none',
        }}
    >

        <Toolbar sx={{ justifyContent: 'space-between'}}>
            {/* Left Side  of the Navbar*/}

            <FlexBetween>
                <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <MenuIcon />
                </IconButton>
            </FlexBetween>

            {/* Right Side of Navbar */}
            <FlexBetween gap='1.5rem'>
                <IconButton onClick={() => dispatch(setMode())}>
                    {
                        theme.palette.mode === 'dark' 
                        ? ( <DarkModeOutlined sx={{ fontSize: '25px'}}/> )
                        : ( <LightModeOutlined sx={{ fontSize: '25px'}} />)
                    }
                </IconButton>

            </FlexBetween>




        </Toolbar>


    </AppBar>
  )
}

export default Navbar
