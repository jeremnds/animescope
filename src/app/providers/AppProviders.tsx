import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "../theme";

export const AppProviders = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);
