import React, { useState } from "react"
import { Box, Button, Grid, IconButton, List, ListItem, ListItemButton, ListItemText, Popover, Typography } from "@mui/material"
import { ButtonFilterItem, FilterModelsProps, OrdenarPorItem } from "../../../interfaces/interfaces";
import { buttonFilterItems, ordernarPorItems } from "./filterOrderItems";
import OrderModels from "./OrderModels";
import FilterModelsSelect from "./FilterModelsSelect";


const FilterModelsBar: React.FC<FilterModelsProps> = ({handleButtonFilter, handleOrderSelect, filterType, orderType}) =>{
  

    return (
        <Box sx={{borderBottom: '3px solid rgba(0, 0, 0, 0.1)', display:'flex',flexDirection:'row', justifyContent: 'space-between', alignItems:'center', height:'41',width:'1141px'}}>
                <Grid item sm={10} container sx={{display: {xs: 'none', sm: 'flex'}, justifyContent: 'start', alignItems:'center'}}>
                    <Grid item sx={{marginLeft:2, marginRight:2}}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Filtrar por</Typography>
                    </Grid>
                {buttonFilterItems.map((filter: ButtonFilterItem, index: number) => (
                    <Button
                        key={`buttons-filter-${index}`}
                        variant="contained"
                        size="small"
                        color= {filter.segment=== filterType? "info": "primary"}
                        onClick={() => handleButtonFilter(filter)}
                        sx={{marginLeft:1,marginRight:1, boxShadow:'none'}}
                    >
                        <Typography variant="h6">{filter.title}</Typography>
                    </Button>
                ))}
                </Grid>

                <Grid item container xs={4} sm={2} sx={{display:{xs:'flex', sm:'none'}, justifyContent: 'flex-start', alignItems:'center'}}>
                    <FilterModelsSelect  items={buttonFilterItems} handleSelected={handleButtonFilter} itemType={filterType}/>
                </Grid>

                <Grid item container xs={4} sm={2} sx={{display:'flex', justifyContent: 'flex-end', alignItems:'center', marginRight:{xs:-2, sm:0}}}>
                    <OrderModels  items={ordernarPorItems} handleSelected={handleOrderSelect} itemType={orderType}/>
                </Grid>
  
        </Box>
    )
}

export default FilterModelsBar;