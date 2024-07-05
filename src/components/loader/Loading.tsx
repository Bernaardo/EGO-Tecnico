import { Box, CircularProgress } from "@mui/material";
import React from "react"
const Loading: React.FC = () =>{
    return (
        <Box  sx={{
            height: 'calc(100vh - 300px)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
        <CircularProgress color="secondary" size={50}/>
        </Box>
    )
}

export default Loading;