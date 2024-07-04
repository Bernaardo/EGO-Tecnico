import { Components, Theme } from "@mui/material";

const components: Components<Theme>={
 
  MuiContainer: {
    styleOverrides: {
      root: {
        paddingLeft: '15px !important',
        paddingRight: '15px !important',
        maxWidth: '1600px',
      },
    },
  },

  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: 'none',
        boxShadow: '0px 2px 10px 0px rgba(8, 94, 162, 0.5)',
        fontSize: '22px',
        lineHeight: '24px',
        fontWeight: '500',
        '&:hover': {
          boxShadow: 'none',
        },
        borderRadius: '7px',
        color: '#ffffff',
       ' & hover': {
          boxShadow: 'none',
          backgroundColor: '#0078D3'
      }
      },
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
      root: {
        borderRadius: '0px',
      },
    },
  },

  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: '7px',
        padding: '3px',
        margin: '3px',
        boxShadow: '0px 7px 30px 0px rgba(90, 114, 123, 0.25)',
      },
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
  MuiLinearProgress: {
    styleOverrides: {
      root: {
        backgroundColor: '#ecf0f2',
        borderRadius: '6px',
      },
    },
  },
  MuiMenuItem: {
    styleOverrides: {
      root: {
        borderRadius: '0',
      },
    },
  },
  MuiChip: {
    styleOverrides: {
      root: {
        fontWeight: '500',
        fontSize: '0.75rem',
      },
    },
  },
  MuiTableCell: {
    styleOverrides: {
      body: {
        maxHeight: '51px',
        lineHeight: '16px',
        paddingTop: '8px',
        paddingBottom: '8px',
      },
    },
  },
  MuiTextField: {
    styleOverrides: {
      root: {
        '&:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: '#1a97f5', 
        },
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: (props) => ({
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: 'none',
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: props.theme.palette.primary.light + ' !important',
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: props.theme.palette.primary.dark + ' !important',
        },
        '& .MuiOutlinedInput-input::placeholder': {
          color: props.theme.palette.text.secondary,
          opacity: '1',
        },
        '& .MuiOutlinedInput-input.Mui-disabled': {
          backgroundColor: props.theme.palette.grey.A100,
        },
        '& .MuiOutlinedInput-input.Mui-disabled::placeholder': {
          color: props.theme.palette.grey.A700,
          opacity: '1',
        },
      }),
    },
  },
  
}

export default components;