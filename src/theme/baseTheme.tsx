import { ThemeOptions } from "@mui/material";
import typography from "./typographyTheme";
import components from "./componentsTheme";

const baseTheme: ThemeOptions = {
    direction: 'ltr',
    palette: {
      primary: {
        main: '#1a97f5',
        light: '#e6f4ff',
        dark: '#0078D3',
      },
      secondary: {
        main: '#1e4db7',
        light: '#2E84FF',
        dark: '#173f98',
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
      
      text: {
        secondary: '#777e89',
      },
    },
    typography,
    components,
  };

export default baseTheme;