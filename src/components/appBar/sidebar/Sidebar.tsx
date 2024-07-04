import React from "react";
import { Drawer, Grid, IconButton, List, ListItem, ListItemText } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { SidebarItem, SidebarProps } from "../../../interfaces/interfaces";
import sidebarItems from "./sidebarItems";
import { Link } from "react-router-dom";


const Sidebar: React.FC <SidebarProps>=({open, handleClick})=>{
    
    return (
    <Drawer
        anchor="right"
        open={open}
        onClose={handleClick(false)}
    >
        <Grid container direction="column" >
            <Grid item style={{ display: 'flex', justifyContent: 'flex-end'}}>
                <IconButton onClick={handleClick(false)} style={{justifyContent: 'flex-end'}}>
                    <CloseIcon />
                </IconButton>
            </Grid>
            <Grid
            item
            onClick={handleClick(false)}
            onKeyDown={handleClick(false)}
                >
                <List>
                    {sidebarItems.map((item: SidebarItem, index: number) => (
                        <ListItem button key={index} component={Link} to={item.href} style={{justifyContent:'flex-end', borderRadius:0, width:'100%', textAlign:'end'}}>
                            <ListItemText primary={item.title} />
                        </ListItem>
                    ))}
                </List>
            </Grid>
        </Grid>
    </Drawer>
    )
}

export default Sidebar;