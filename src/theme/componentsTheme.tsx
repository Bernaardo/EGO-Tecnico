import { Components, Theme } from "@mui/material";

const components: Components<Theme>={
 
  MuiContainer: {
    styleOverrides: {
      root: (props) => ({
        paddingLeft: '15px !important',
        paddingRight: '0px !important',
        maxWidth: '1600px',
        backgroundColor: props.theme.palette.background.default, 
      }),
    },
  },

  MuiButton: {
    styleOverrides: {
      root: (props) => ({
        textTransform: 'none',
        boxShadow: '0px 2px 10px 0px rgba(8, 94, 162, 0.5)',
        fontSize: '22px',
        lineHeight: '24px',
        fontWeight: '500',
        borderRadius: '7px',
        color: props.theme.palette.primary.contrastText,
        '&:hover': {
          boxShadow: 'none',
          backgroundColor: props.theme.palette.action.hover, 
        },
      }),
      sizeMedium: {
        paddingTop: '14px',
        paddingBottom: '14px',
        paddingLeft: '32px',
        paddingRight: '32px',
      },
      sizeLarge: {
        paddingTop: '24px',
        paddingBottom: '24px',
        paddingLeft: '54px',
        paddingRight: '54px',
      },
      outlined: {
        color: '#ffbf3c',
      },
    },
  },

  MuiListItem: {
    styleOverrides: {
      root: (props) => ({
        borderRadius: '0px',
        border:'none',
        borderColor:props.theme.palette.primary.main,
        backgroundColor: props.theme.palette.primary.main,
        "&.Mui-selected": {
          backgroundColor: props.theme.palette.info.main,
        },
      }),
    },
  },

  MuiCard: {
    styleOverrides: {
      root: (props) => ({
        borderRadius: '5px',
        padding: '3px',
        margin: '3px',
        boxShadow: props.theme.shadows[0],
        transition: 'box-shadow 0.3s ease',
        '&:hover': {
          boxShadow: props.theme.shadows[4],
        },
      }),
    },
  },

  MuiListItemIcon: {
    styleOverrides: {
      root: {
        minWidth: '40px',
      },
    },
  },

  MuiGrid: {
    styleOverrides: {
      root: {
        paddingTop: '0px',
        paddingBottom: '0px',
      },
    },
  },

  MuiTabs: {
    styleOverrides: {
      root: (props) => ({
        backgroundColor: props.theme.palette.background.default, 
      }),
      indicator: (props) => ({
        backgroundColor: props.theme.palette.secondary.main, 
      }),
    },
  },

  MuiTab: {
    styleOverrides: {
      root: (props) => ({
        '&.Mui-selected': {
          color: props.theme.palette.secondary.main, 
        },
        '&.Mui-focusVisible': {
          backgroundColor: props.theme.palette.secondary.main, 
        },
        '&:hover': {
          backgroundColor: props.theme.palette.action.hover,
        },
        color: props.theme.palette.secondary.contrastText, 
        borderBottom: `4px solid ${props.theme.palette.secondary.main}`,
      }),
    },
  },
  
}

export default components;