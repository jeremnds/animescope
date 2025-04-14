import { ApolloProvider } from "@apollo/client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { client } from "../../lib/graphql/client";
import theme from "../theme";
export const AppProviders = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>
    <ApolloProvider client={client}>
      <CssBaseline />
      {children}
    </ApolloProvider>
  </ThemeProvider>
);
