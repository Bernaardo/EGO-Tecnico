import React, { useState } from "react"
import { Box, Button, Grid, IconButton, List, ListItem, ListItemButton, ListItemText, Popover, Typography } from "@mui/material"
import { ButtonFilterItem, FilterModelsProps, OrdenarPorItem } from "../../../interfaces/interfaces";
import { buttonFilterItems, ordernarPorItems } from "./filterOrderItems";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FilterModelsBar: React.FC<FilterModelsProps> = ({handleButtonFilter, handleOrderSelect}) =>{
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const openPopover = Boolean(anchorEl);

    const handeOrderAction = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleCloseOrderAction = () => {
        setAnchorEl(null);
      };

    return (
        <Box sx={{border:2, display:'flex', flexDirection:'row', justifyContent: 'space-evenly'}}>
                <Grid item container sx={{display:'flex', justifyContent: 'start'}}>
                    <Grid item sx={{marginLeft:2, marginRight:2}}>
                        <Typography variant="h5">Filtrar por</Typography>
                    </Grid>
                {buttonFilterItems.map((filter: ButtonFilterItem, index: number) => (
                    <Grid item key={`buttons-filter-${index}`}>
                    <Button
                        key={index}
                        variant="contained"
                        size="small"
                        color="primary"
                        onClick={() => handleButtonFilter(filter)}
                        sx={{ marginRight: 2 }}
                    >
                        <Typography variant="h5">{filter.title}</Typography>
                    </Button>
                    </Grid>
                ))}
                </Grid>

                <Grid item container sx={{display:'flex', justifyContent: 'flex-end', alignItems:'center'}}>
                    <Grid item sx={{ borderRadius:0}}>
                    <Typography variant="h5">Ordenar por</Typography>
                    </Grid>
                    <Grid item sx={{ borderRadius:0}}>
                    <IconButton sx={{display:'flex', borderRadius:0}} onClick={handeOrderAction} >
                        <ExpandMoreIcon />
                    </IconButton>
                    </Grid>
                    <Popover
                        id="optionsLanguages"
                        open={openPopover}
                        anchorEl={anchorEl}
                        onClose={handleCloseOrderAction}
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'left',
                        }}
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'left',
                        }}
                    >
                    <List sx={{padding:0}}>
                        {
                            ordernarPorItems.map((order: OrdenarPorItem, index: number)=>(
                        <ListItem disablePadding key={`order-item-${index}`}>
                            <ListItemButton  divider onClick={()=> {
                                handleOrderSelect(order);
                                handleCloseOrderAction();}}>
                                <ListItemText  primary={<span dangerouslySetInnerHTML={{ __html: order.title }}/>}/>
                            </ListItemButton>
                        </ListItem>
                            )
                            )
                        }
                    </List>
                    </Popover>
                </Grid>
  
        </Box>
    )
}

export default FilterModelsBar;