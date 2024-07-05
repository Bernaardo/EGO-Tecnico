import React from "react";
import { Box, Container, Grid, experimentalStyled } from "@mui/material";
import Header from "../components/appBar/Header";
import { Outlet } from "react-router-dom";
import { TopbarHeight } from "../theme/baseTheme";



const PageWrapper = experimentalStyled('div')(({ theme }) => ({
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.default, 
  
    [theme.breakpoints.up('lg')]: {
      paddingTop: TopbarHeight,
    },
    [theme.breakpoints.down('lg')]: {
      paddingTop: '64px',
    },
  }));
const AppLayout: React.FC = () =>{
    return (
        <>
        <Header/>
        <PageWrapper>
        <Container
          maxWidth={false}
          sx={{
            paddingTop: '20px',
            minWidth:  "95%",
            justifyContent:'center'
          }}
        >
          <Box sx={{ minHeight: 'calc(100vh - 170px)', justifyContent:'center' }}>
            <Outlet />
          </Box>
        </Container>
      </PageWrapper>
        </>
    )
}

export default AppLayout;