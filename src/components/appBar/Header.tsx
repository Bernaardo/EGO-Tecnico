import React, { useState } from "react";
import { AppBar, Grid, IconButton, Toolbar, Typography, Box } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from "./sidebar/Sidebar";
import Logo from "../../assets/images/Logo.png";

import TabsComponent from "./pestañas/Tabs";

const Header: React.FC = () => {
    const [open, setOpen] = useState(false);

    const menuHandleClick = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' )) {
            return;
        }
        setOpen(open);
    };


    return (
        <>
            <AppBar position="fixed" color="inherit" sx={{ height:'60px', boxShadow: 'none', borderBottom: '3px solid rgba(0, 0, 0, 0.1)'}}>
                <Toolbar style={{ justifyContent: 'space-between', alignItems:'center', padding: '0 10px' }} sx={{ cursor: 'default' }}> 
                <Grid sx={{ display: 'flex', justifyContent:'flex-start', alignItems: 'center' }}>
                        <img src={Logo} alt="Logo" style={{ width: 'auto', height: '30px', marginLeft:'10px',marginRight: '40px' }} />
                    </Grid>
                    <Box sx={{display: {
                                xs: 'none', 
                                sm: 'flex', 
                            }, flexGrow: 1, justifyContent: 'center', marginBottom:-1 }}>
                        <TabsComponent />
                    </Box>
                    <Grid container display="flex" sx={{ cursor: 'default', justifyContent: 'end', alignItems: 'center' }}>
                        <Typography
                            variant="h5"
                            fontWeight="bold"
                            textAlign="center"
                        >
                            Menu
                        </Typography>
                        <IconButton
                            size="large"
                            edge="end"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 0}}
                            onClick={menuHandleClick(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Sidebar open={open} handleClick={menuHandleClick}/>
        </>
    );
};

export default Header;