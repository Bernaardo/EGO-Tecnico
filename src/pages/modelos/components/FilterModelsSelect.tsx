import React, { useState } from "react";
import { Grid, IconButton, List, ListItem, ListItemButton, ListItemText, Popover, Typography } from "@mui/material";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ButtonFilterItem, FilterModelsSelectProps } from "../../../interfaces/interfaces";
import { ordernarPorItems } from "./filterOrderItems";

const FilterModelsSelect: React.FC <FilterModelsSelectProps>= ({items, handleSelected, itemType}) =>{
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const openPopover = Boolean(anchorEl);

    const handeOrderAction = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleCloseOrderAction = () => {
        setAnchorEl(null);
      };

    return (
        <>
        <Grid item sx={{ borderRadius:0}}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Ordenar por</Typography>
                    </Grid>
                    <Grid item sx={{ borderRadius:0}}>
                    <IconButton sx={{display:'flex', borderRadius:0}} onClick={handeOrderAction} >
                        {openPopover?<ExpandLessIcon />:
                        <ExpandMoreIcon/>}
                    </IconButton>
                    </Grid>
                    <Popover
                        id="optionsLanguages"
                        open={openPopover}
                        anchorEl={anchorEl}
                        onClose={handleCloseOrderAction}
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'right',
                        }}
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'right',
                        }}
                        PaperProps={{ sx: { borderRadius: 0,
                             width: '170px', 
                            height: '182px' } }}
                    >
                    <List sx={{padding:0, margin:0}}>
                        {
                            items.map((item: ButtonFilterItem, index: number)=>(
                        <ListItem sx={{height:'35.7px', margin:0}} selected={(item.segment===itemType)} disablePadding key={`order-item-${index}`}>
                            <ListItemButton 
                                divider 
                                onClick={()=> {
                                handleSelected(item);
                                handleCloseOrderAction();}}>
                                <ListItemText primary={ <Typography variant="h6" dangerouslySetInnerHTML={{ __html: item.title }}/>}/>
                            </ListItemButton>
                        </ListItem>
                            )
                            )
                        }
                    </List>
                    </Popover>
        </>
    )
}

export default FilterModelsSelect;