import React from "react";
import { Box, Drawer, Grid, IconButton, List, ListItem, ListItemText, Typography, useTheme } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { SidebarItem, SidebarProps } from "../../../interfaces/interfaces";
import sidebarItems from "./sidebarItems";
import { Link } from "react-router-dom";


const Sidebar: React.FC <SidebarProps>=({open, handleClick})=>{
    const theme = useTheme();

    const renderListItem = (item:SidebarItem, index: number, grayGrup?: boolean) => (
        
        <ListItem
            key={index}
            button
            component={Link}
            to={item.href}
            sx={grayGrup?{
                backgroundColor: 'transparent',
                borderRadius: 0,
                width: '100%',
                height: '30px',
                textAlign: 'end',
            }:{ borderRadius: 0,
            width: '100%',
            height: '30px',
            textAlign: 'end',}}
        >
            <ListItemText  sx={{backgroundColor:'transparent'}} primary={<Typography variant="h5">{item.title}</Typography>}/>
        </ListItem>
    );

    return (
    <Drawer
        anchor="right"
        open={open}
        onClose={handleClick(false)}
        sx={{
            '& .MuiDrawer-paper': {
                width: '250px',
                
            },
            
        }}
    >
        <Grid container direction="column" >
            <Grid item sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom:2, paddingBottom:0, backgroundColor:'#ffffff'}}>
                <IconButton onClick={handleClick(false)} style={{justifyContent: 'flex-end'}}>
                    <CloseIcon />
                </IconButton>
            </Grid>
            <Grid
            item
            onClick={handleClick(false)}
            onKeyDown={handleClick(false)}
            sx={{}}
                >
                <List>
                        {sidebarItems.slice(0, 4).map((item, index)=>renderListItem(item, index,))}

                        <Box sx={{marginBottom:2, marginTop:2, padding:0.2,backgroundColor: theme.palette.info.main}}/>

                        {sidebarItems.slice(4, 7).map((item, index)=>renderListItem(item, index,))}

                        <Box sx={{marginBottom:2, marginTop:2, padding:0.2,backgroundColor: theme.palette.info.main}}/>

                        {sidebarItems.slice(7, 10).map((item, index)=>renderListItem(item, index,))}

                        <Box sx={{marginBottom:2, marginTop:2, paddingTop:5, paddingBottom:5,backgroundColor: theme.palette.info.main}}>
                        {sidebarItems.slice(10).map((item, index)=>renderListItem(item, index, true))}
                        </Box>
                    </List>
            </Grid>
        </Grid>
    </Drawer>
    )
}

export default Sidebar;