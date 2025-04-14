import { ApolloError } from "@apollo/client";
import { Box } from "@mui/material";
import { Anime } from "../../types/anime.type";
import AnimeCard from "./AnimeCard";
type AnimeListProps = {
  data: Anime[];
  loading: boolean;
  error: ApolloError | undefined;
};
export default function AnimeList({ data, loading, error }: AnimeListProps) {
  return (
    <div>
      {!error && !loading && (
        <Box
          component="section"
          display="grid"
          gridTemplateColumns="repeat(4, 1fr)"
          gap={4}
          sx={{ marginY: 10 }}
        >
          {data?.map((anime) => (
            <AnimeCard key={anime.id} anime={anime} />
          ))}
        </Box>
      )}
      {error && <div>Error: {error.message}</div>}
      {loading && <div>Loading...</div>}
    </div>
  );
}
