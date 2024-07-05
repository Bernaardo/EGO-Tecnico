import { TypographyOptions } from "@mui/material/styles/createTypography";

const typography: TypographyOptions = {
  fontFamily: "'DM Sans', sans-serif",
  body1: {
    fontWeight: 400, // or 'bold'
  },
  h1: {
    fontWeight: 600,
    fontSize: '38.19px',
    lineHeight: '76.38px',
  },
  h2: {
    fontWeight: 500,
    fontSize: '24px',
    lineHeight: '38.19px',
  },
  h3: {
    fontWeight: 600,
    fontSize: '17px',
    lineHeight: '28.64px',
  },
  h4: {
    fontWeight: 600,
    fontSize: '1.2rem',
    lineHeight: '1.5',
  },
  h5: {
    fontWeight: 500,
    fontSize: '1rem',
    lineHeight: '1.5',
  },
  h6: {
    fontWeight: 500,
    fontSize: '0.72rem',
    lineHeight: '1.5',
  },
  
  button: {
    textTransform: 'none',
    fontWeight: '400',
  },
  subtitle1: {
    fontSize: '1rem',
    fontWeight: '400',
  },
  subtitle2: {
    fontSize: '0.875rem',
    fontWeight: '400',
  },
};

export default typography;