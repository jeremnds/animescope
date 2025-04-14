import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#89B4FA" },
    secondary: { main: "#F38BA8" },
    background: {
      default: "#0F0F1C",
      paper: "#1E1E2E",
    },
    text: {
      primary: "#E6E9EF",
      secondary: "#BAC2DE",
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
