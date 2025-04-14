import { Box, Typography } from "@mui/material";
import SearchInput from "./SearchInput";

type HeroSectionProps = {
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  search: string;
};

export default function HeroSection({ onSearch, search }: HeroSectionProps) {
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
        gap: 4,
      }}
    >
      <Box
        component="div"
        sx={{
          backgroundColor: "background.paper",
          color: "white",
          padding: 8,
          borderRadius: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "25rem",
          justifyContent: "space-between",
          boxShadow: "0 0 15px rgba(137, 180, 250, 0.1)",
        }}
      >
        <Typography variant="h1" sx={{ fontWeight: 600, fontSize: "3rem" }}>
          Track your favorite{" "}
          <Box component="span" sx={{ color: "secondary.main" }}>
            anime
          </Box>
          .
        </Typography>
        <Box
          sx={{
            margin: 2,
            paddingX: 6,
            maxWidth: "550px",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography variant="h5" sx={{ fontSize: "1.5rem" }}>
            Build your watchlist.
            <br />
            Discover what to watch next.
          </Typography>
        </Box>
        <Box
          sx={{
            margin: 2,
            paddingX: 6,
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <SearchInput onSearch={onSearch} search={search} />
        </Box>
      </Box>
    </Box>
  );
}
