import { blue, lightBlue, grey, deepOrange, orange } from "@mui/material/colors";

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
        // palette values for light mode
        gufran: {
          main: blue[600],
        },
        onHover: {
          main: lightBlue[800],
        },
        locationColor: {
          main: grey[300],
        },
        appBarbg: {
          main: "#ed6c02",
          bgcolor: grey[200],

        },
        hover: {
          "&:hover": {
            backgroundColor: orange[600]
          },
        }
      }
      : {
        // palette values for dark mode
        gufran: {
          main: grey[800],
        },
        onHover: {
          main: grey[700],
        },
        locationColor: {
          main: grey[800],
        },
        appBarbg: {
          main: grey[800],
        },
        hover: {
          "&:hover": {
            backgroundColor: orange[300],
          }
        }
      }),
  },
});
export default getDesignTokens;
