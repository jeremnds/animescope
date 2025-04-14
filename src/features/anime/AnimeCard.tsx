import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Anime } from "../../types/anime.type";

type AnimeCardProps = {
  anime: Anime;
};

export default function AnimeCard({ anime }: AnimeCardProps) {
  return (
    <Card>
      <CardMedia
        component="img"
        image={anime.coverImage.large}
        alt={anime.title.english}
        sx={{ height: 100, width: 100 }}
      />
      <CardContent>
        <Typography variant="h6">{anime.title.english}</Typography>
      </CardContent>
    </Card>
  );
}
