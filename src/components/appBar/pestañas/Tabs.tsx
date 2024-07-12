import { useEffect, useState } from "react";
import { Box, Tab, Tabs } from "@mui/material"
import { TabItem } from "../../../interfaces/interfaces"
import tabsItems from "./tabsItems"
import { useLocation, useNavigate } from "react-router-dom";

const TabsComponent: React.FC = () =>{
    const location = useLocation();
    const [value, setValue] = useState(0);
    const navigate = useNavigate();

    const navigateToModels = () =>{
        navigate(`/ficha-de-modelo`);
    }
    
    useEffect(()=>{
        
        const currentPath = location.pathname;
        if (!isNaN(parseInt(currentPath.split("/")[2]))) {
            setValue(1);
        } else if(currentPath === "/modelos"){
            setValue(0);
        } 
    },[location.pathname])


    return (
    <Box sx={{display:'flex', alignItems:'end', minWidth:'300px'}}>
        <Tabs value={value} sx={{backgroundColor:'transparent'}}>
            {tabsItems.map((tab: TabItem, index: number)=>(
                <Tab  key={`tabs-items-${index}`} disableTouchRipple label={tab.title} id={ `simple-tab-${index}`} aria-controls={ `simple-tabpanel-${index}`} disableFocusRipple  
                sx={{ cursor: 'default', borderBottom: value===index?4:0,
                    ...(index === 1 && { '&:hover': { backgroundColor: 'transparent' } })}}
                onClick={()=>{if (index === 0 && location.pathname !=="/modelos") {
                    navigateToModels();
                }}}
                />
            ))}
        </Tabs>
    </Box>
    )
}

export default TabsComponent;