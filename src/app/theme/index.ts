import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#7ab3b3",
    },
    secondary: {
      main: "#4d889d",
    },
    background: {
      default: "#f0f8ff",
      paper: "#cee9e6",
    },
    text: {
      primary: "#17080e",
    },
  },
  shape: {
    borderRadius: 10,
  },
  typography: {
    fontFamily: '"Inter", "Roboto", sans-serif',
  },
});

export default theme;
