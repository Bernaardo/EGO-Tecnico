import { ThemeOptions } from "@mui/material";
import typography from "./typographyTheme";
import components from "./componentsTheme";

const TopbarHeight = 70;

const baseTheme: ThemeOptions = {
  direction: 'ltr',
  palette: {
    primary: {
      main: '#ffffff',
      contrastText: '#000000',
    },
    secondary: {
      main: '#CA4122', 
      contrastText: '#000000',
    },
    success: {
      main: '#60AF44',
      light: '#ebfaf2',
      dark: '#00964b',
      contrastText: '#ffffff',
    },
    error: {
      main: '#CA4122',
      light: '#fdf3f5',
      dark: '#e45a68',
    },
    background: {
      default: '#ffffff', 
    },
    text: {
      secondary: '#777e89',
    },
    action: {
      hover: '#f0f0f0',
    },
  },
  typography,
  components,
};

export { TopbarHeight, baseTheme };