import { useEffect, useState } from "react";
import { Box, Tab, Tabs } from "@mui/material"
import { TabItem } from "../../../interfaces/interfaces"
import tabsItems from "./tabsItems"
import { useLocation } from "react-router-dom";

const TabsComponent: React.FC = () =>{
    const location = useLocation();
    const [value, setValue] = useState(0);

    useEffect(()=>{
        const currentPath = location.pathname;

        if (currentPath === "/modelos") {
            setValue(0);
        } else if (currentPath === "/ficha-modelo") {
            setValue(1);
        }
    },[location.pathname])


    return (
    <Box sx={{display:'flex', alignItems:'flex-end'}}>
        <Tabs value={value} >
            {tabsItems.map((tab: TabItem, index: number)=>(
                <Tab  key={`tabs-items-${index}`} disableTouchRipple label={tab.title} id={ `simple-tab-${index}`} aria-controls={ `simple-tabpanel-${index}`} disableFocusRipple  sx={{ cursor: 'default', borderBottom: value===index?4:0}}/>
            ))}
        </Tabs>
    </Box>
    )
}

export default TabsComponent;