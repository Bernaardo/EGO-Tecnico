import React from "react"
import WifiOffIcon from '@mui/icons-material/WifiOff';
import { Grid, Typography,useTheme } from "@mui/material";
const ServerError: React.FC = () =>{
    const theme = useTheme();
    return (
        <Grid item
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          height: '50vh',
        }}
        >
            <WifiOffIcon
            fontSize="large"
            sx={{ width: '10rem', height: '10rem', color: theme.palette.secondary.main }}
            />
            <Typography variant="h3">Server Error</Typography>
            <Typography variant="h4" textAlign="center" py={0.5}>
            En estos momentos no podemos mostrar la información solicitada
            </Typography>
            <Typography variant="h4" textAlign="center" py={0.5}>
            Vuelve a intenterlo mas tarde
            </Typography>
        </Grid>
    )
}

export default ServerError