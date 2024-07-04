import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import Router from './routes/Router';
import { theme } from './theme/getTheme';

function App() {
  const routing = createBrowserRouter(Router());
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={routing}/>
    </ThemeProvider>
  );
}

export default App;
