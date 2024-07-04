import React from "react";
import { Grid } from "@mui/material";
import Header from "../components/appBar/Header";
import { Outlet } from "react-router-dom";

const AppLayout: React.FC = () =>{
    return (
        <Grid >
            <Header/>
            <Grid>
            <Outlet />
          </Grid>
        </Grid>
    )
}

export default AppLayout;