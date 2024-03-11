import React,{useState} from 'react'
import { AppBar, Box,Divider,Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import logo from '../images/logo.svg'
import FastfoodIcon from '@mui/icons-material/Fastfood';
import {Link,NavLink} from 'react-router-dom';
import '.././Styles/HeaderStyles.css';
import MenuIcon from '@mui/icons-material/Menu';

const Header=() => {
    const [mobileOpen, setMobileOpen]= useState(false);
    // handle menu click
    const handleDrawerToggle=() =>{
        setMobileOpen(!mobileOpen);
    };
    // menu drawer
    const drawer=(
        <Box onClick={handleDrawerToggle} sx={{textAlign :"center"}}>
              <Typography color={"goldenrod"} variant='h6' component= "div" sx={{flexGrow:1, my:2}}>
              <img src={logo} alt='logo' height={'70'} width={"200"}/>
                    </Typography>
                    <Divider />
                    
                    <ul className='mobile-navigation'>
                        <li>
                            <NavLink activeClassName="active"to={"/"}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/menu"}>Menu</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/about"}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/contact"}>Contact</NavLink>
                        </li>
                    </ul>
                
        </Box>
    );
    return (
        <>
            <Box>
                <AppBar component={"nav"} sx={{bgcolor:"black"}}>
                <Toolbar>
                <IconButton color="inherit" aria-lebel="open drawer" edge="start" sx={{ mr:2,
                display:{sm: ""},}}
                onClick={handleDrawerToggle}
                >
                    <MenuIcon />
                </IconButton>
                <img src={logo} alt='logo' height={'70'} width={"200"}/>
                <Typography color={"goldenrod"} variant='h6' component= "div" sx={{flexGrow:1}}>
                
                    </Typography>
                    <Box sx={{display: {xs:"none", sm:"block"}}}>
                    <ul className='Navigation-menu'>
                    <li>
                            <NavLink activeClassName="active"to={"/"}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/menu"}>Menu</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/about"}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/contact"}>Contact</NavLink>
                        </li>
                    </ul>
                    </Box>
                </Toolbar>
                    
                </AppBar>
                <Box component="nav">
                    <Drawer variant="temporary" open={mobileOpen} 
                    onClose={handleDrawerToggle}
                    sx={{display: {xs:'block',sm:''}, "& .MuiDrawer-paper":{boxSizing:"border-box",width:"240px"},}}
                    >
                        {drawer}
                    </Drawer>
                    <Box>
                    <Toolbar/>
                    </Box>
                </Box>
                
            </Box>
        </>
    );
};

export default Header;