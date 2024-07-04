import React, { useState } from "react";
import { AppBar, Grid, IconButton, Toolbar, Typography, List, ListItem, ListItemText, Box } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from "./sidebar/Sidebar";

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
            <AppBar position="fixed" color="inherit" sx={{ height:'55px'}}>
                <Toolbar style={{ justifyContent: 'space-between', alignItems:'center' }} sx={{ cursor: 'default' }}> 
                        <Grid container display="flex" sx={{ cursor: 'default', display:'flex', justifyContent: 'start', alignItems: 'flex-end' }}>
                            <TabsComponent/>
                        </Grid>
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
                            sx={{ mr: 2, mt:0 }}
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