import {
  AppBar,
  Box,
  Container,
  Link as MuiLink,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <AppBar position="static" color="primary" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography variant="h6" component="div">
            AnimeScope
          </Typography>
          <Box
            component="ul"
            display="flex"
            gap={8}
            sx={{
              listStyle: "none",
              marginLeft: "auto",
            }}
          >
            <li>
              <MuiLink
                component={Link}
                to="/"
                style={{ color: "white", textDecoration: "none" }}
              >
                Search
              </MuiLink>
            </li>
            <li>
              <MuiLink
                component={Link}
                to="/watchlist"
                style={{ color: "white", textDecoration: "none" }}
              >
                My Watchlist
              </MuiLink>
            </li>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
